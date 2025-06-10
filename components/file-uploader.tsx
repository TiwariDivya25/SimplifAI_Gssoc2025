"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { FileText, Upload, CheckCircle2, Sparkles } from "lucide-react";
import axios from "axios";

export function FileUploader() {
	const [file, setFile] = useState<File | null>(null);
	const [uploading, setUploading] = useState(false);
	const [progress, setProgress] = useState(0);
	const [dragActive, setDragActive] = useState(false);
	const router = useRouter();

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			setFile(e.dataTransfer.files[0]);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!file) return;

		setUploading(true);

		const formData = new FormData();
		formData.append("file", file);
		formData.append("type", file.type);

		try {
			const res = await axios.post("http://localhost:3000/api/parse-pdf", formData, {
				headers: {},
			});
			const data = await res.data;
			console.log(data);

			// Simulate upload progress with more realistic timing
			const progressInterval = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) {
						clearInterval(progressInterval);
						setTimeout(() => {
							setUploading(false);
							router.push(`/results/${encodeURIComponent(file.name)}`);
						}, 500);
						return 100;
					}
					return prev + Math.random() * 15 + 5;
				});
			}, 200);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid w-full gap-4">
				<div
					className={`relative flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${
						dragActive
							? "border-primary bg-primary/10 scale-105"
							: file
							? "border-green-500 bg-green-50 dark:bg-green-950/20"
							: "border-muted-foreground/25 bg-muted/30 hover:bg-muted/50 hover:border-primary/50 hover:scale-[1.02]"
					}`}
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
					onDrop={handleDrop}
				>
					{file ? (
						<div className="flex flex-col items-center gap-3 text-center animate-fade-in">
							<div className="relative">
								<FileText className="w-12 h-12 text-green-500 animate-bounce-gentle" />
								<CheckCircle2 className="w-5 h-5 text-green-500 absolute -top-1 -right-1 animate-scale-in" />
							</div>
							<div>
								<p className="font-medium text-green-700 dark:text-green-400">{file.name}</p>
								<p className="text-sm text-green-600 dark:text-green-500">
									{(file.size / 1024 / 1024).toFixed(2)} MB • Ready to process
								</p>
							</div>
						</div>
					) : (
						<div className="flex flex-col items-center gap-3 text-center">
							<div className="relative">
								<Upload
									className={`w-12 h-12 text-muted-foreground transition-all duration-300 ${
										dragActive ? "scale-110 text-primary" : ""
									}`}
								/>
								{dragActive && <Sparkles className="w-4 h-4 text-primary absolute -top-1 -right-1 animate-spin" />}
							</div>
							<div className="space-y-1">
								<p className="font-medium">{dragActive ? "Drop your file here!" : "Drag & drop your file here"}</p>
								<p className="text-sm text-muted-foreground">or click to browse files • PDF, DOCX, TXT supported</p>
							</div>
						</div>
					)}
					<Input id="file" type="file" className="hidden" accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} />
					<label htmlFor="file" className="w-full h-full absolute top-0 left-0 cursor-pointer">
						<span className="sr-only">Choose file</span>
					</label>
				</div>

				{file && (
					<div className="space-y-4 animate-fade-in-up">
						{uploading && (
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>Processing your document...</span>
									<span>{Math.round(progress)}%</span>
								</div>
								<Progress value={progress} className="h-3 transition-all duration-300" />
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
									{progress < 30 && "Analyzing document structure..."}
									{progress >= 30 && progress < 60 && "Extracting key information..."}
									{progress >= 60 && progress < 90 && "Generating learning materials..."}
									{progress >= 90 && "Almost ready!"}
								</div>
							</div>
						)}
						<Button
							type="submit"
							className="w-full group hover:scale-[1.02] transition-all duration-300 bg-gradient-primary-purple hover:bg-gradient-purple-pink text-white"
							disabled={!file || uploading}
						>
							{uploading ? (
								<>
									<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
									Processing...
								</>
							) : (
								<>
									<Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
									Process Document
								</>
							)}
						</Button>
					</div>
				)}
			</div>
		</form>
	);
}
