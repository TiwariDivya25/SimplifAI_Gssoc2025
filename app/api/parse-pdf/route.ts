import { NextRequest } from "next/server";
import pdfParse from "pdf-parse";

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const file = formData.get("file") as File;

	const fileType = formData.get("type") as string;
	console.log(fileType);
	if (!file) {
		return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
	}

	const buffer = Buffer.from(await file.arrayBuffer());
	const data = await pdfParse(buffer);

	return new Response(JSON.stringify({ text: data.text }), {
		headers: { "Content-Type": "application/json" },
	});
}
