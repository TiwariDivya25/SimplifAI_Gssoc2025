import axios from "axios";
import { NextRequest } from "next/server";
import pdfParse from "pdf-parse";

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const file = formData.get("file") as File | null;
	const fileType = formData.get("type") as string | null;

	if (!file) {
		return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
	}
	if (!fileType) {
		return new Response(JSON.stringify({ error: "Type is not provided" }), { status: 400 });
	}

	const buffer = Buffer.from(await file.arrayBuffer());

	try {
		let textContent = "";

		if (fileType === "application/pdf") {
			const data = await pdfParse(buffer);
			textContent = data.text;
		} else if (fileType === "text/plain") {
			textContent = buffer.toString("utf-8");
		} else {
			return new Response(JSON.stringify({ error: "Unsupported file type" }), { status: 415 });
		}

		const openRouterPayload = {
			model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
			response_format: "json",
			messages: [
				{
					role: "system",
					content:
						"You are a strict assistant. Only respond in raw valid JSON format. Do not explain, do not include markdown, and do not add commentary. Only output valid JSON.",
				},
				{
					role: "user",
					content: `A student has provided a text from a book. Return only the following JSON format:

{
  "summary": {
    "mainPoints": [
      { "keyPoint": "..." },
      { "keyPoint": "..." },
      { "keyPoint": "..." },
      { "keyPoint": "..." }
    ],
    "keyInsights": "...",
    "recommendations": [
      { "statement": "..." },
      { "statement": "..." },
      { "statement": "..." }
    ]
  },
  "flashcards": [
    { "question": "...", "answer": "...",difficulty:"easy"or"medium"or"hard" },
    { "question": "...", "answer": "...",difficulty:"easy"or"medium"or"hard" },
    { "question": "...", "answer": "...",difficulty:"easy"or"medium"or"hard" },
    { "question": "...", "answer": "...",difficulty:"easy"or"medium"or"hard"}
  ],
  "quiz": [
    {
      "question": "...",
      "options": ["a", "b", "c", "d"],
      "correct": Can be 1 or 2 or 3 or 4 according to question
    },
    {
      "question": "...",
      "options": ["a", "b", "c", "d"],
      "correct": Can be 1 or 2 or 3 or 4 according to question
    }
    // Add 8 more entries just like above
  ]
}

Important:
- Follow the structure exactly.
- Use only JSON syntax.
- Do NOT explain anything.
- Here is the input text:

${textContent}`,
				},
			],
		};

		try {
			const response = await axios.post(`${process.env.NEXT_PUBLIC_AI_URL}`, openRouterPayload, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_AI_API_KEY}`,
				},
			});

			// Fallback: Extract only JSON if explanation sneaks in
			const raw = response.data;
			let jsonOnly = raw;
			try {
				const match = typeof raw === "string" ? raw.match(/\{[\s\S]*\}/) : null;
				if (match) jsonOnly = JSON.parse(match[0]);
			} catch (jsonParseErr) {
				console.warn("Could not extract clean JSON:", jsonParseErr);
			}

			return new Response(JSON.stringify({ result: jsonOnly }), {
				headers: { "Content-Type": "application/json" },
				status: 200,
			});
		} catch (apiErr) {
			console.error("OpenRouter API error:", apiErr);
			return new Response(JSON.stringify({ error: "API call failed" }), {
				headers: { "Content-Type": "application/json" },
				status: 500,
			});
		}
	} catch (err) {
		console.error("File parsing error:", err);
		return new Response(JSON.stringify({ error: "Failed to parse file" }), {
			headers: { "Content-Type": "application/json" },
			status: 500,
		});
	}
}
