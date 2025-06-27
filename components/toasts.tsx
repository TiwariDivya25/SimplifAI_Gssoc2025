"use client";
import { useEffect } from "react";

export function Toast({
	message,
	type = "error",
	onClose,
}: {
	message: string;
	type?: "error" | "success";
	onClose: () => void;
}) {
	useEffect(() => {
		if (!message) return;
		const timer = setTimeout(onClose, 3000);
		return () => clearTimeout(timer);
	}, [message, onClose]);
	if (!message) return null;
	return (
		<div
			className={`fixed top-6 right-6 z-[2000] px-5 py-3 rounded-xl font-medium shadow-xl text-white transition-all
      ${type === "error" ? "bg-red-600/90" : "bg-green-600/90"}
      animate-fade-in-up
    `}
		>
			{message}
		</div>
	);
}
