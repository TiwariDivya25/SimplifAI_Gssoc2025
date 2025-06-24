"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText, Share2 } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export function ResultsHeader({ fileName }: { fileName: string }) {
	const data = useSelector((state: RootState) => state.parse);
	const handleExport = () => {
		if (!data) return;
		const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${fileName}.json`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};
	const handleShare = () => {
		if (!data) return;
		const shareData = {
			title: `Results for ${fileName}`,
			text: `Check out the results for ${fileName}.`,
			url: window.location.href,
		};
		if (navigator.share) {
			navigator
				.share(shareData)
				.then(() => console.log("Share successful"))
				.catch((error) => console.error("Error sharing:", error));
		} else {
			alert("Sharing is not supported in this browser.");
		}
	};

	return (
		<div className="sticky top-0 z-10 bg-background border-b">
			<div className="container flex items-center justify-between h-16 px-4 mx-auto">
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link href="/">
							<ArrowLeft className="w-5 h-5" />
							<span className="sr-only">Back</span>
						</Link>
					</Button>
					<div className="flex items-center gap-2">
						<FileText className="w-5 h-5 text-primary" />
						<span className="font-medium truncate max-w-[200px] md:max-w-md">{fileName}</span>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" size="sm" className="hidden sm:flex" onClick={handleExport}>
						<Download className="w-4 h-4 mr-2" />
						Export
					</Button>
					<Button variant="outline" size="sm" className="hidden sm:flex" onClick={handleShare}>
						<Share2 className="w-4 h-4 mr-2" />
						Share
					</Button>
				</div>
			</div>
		</div>
	);
}
