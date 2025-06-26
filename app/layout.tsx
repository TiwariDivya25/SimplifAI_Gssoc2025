import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "./store-provider";
import { SessionProviderC } from "@/components/SessionProviderC";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Simplifai - AI-Powered Learning",
	description: "Transform your documents into flashcards, summaries, and quizzes with AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
					<SessionProviderC>
						<StoreProvider>{children}</StoreProvider>
					</SessionProviderC>
				</ThemeProvider>
			</body>
		</html>
	);
}
