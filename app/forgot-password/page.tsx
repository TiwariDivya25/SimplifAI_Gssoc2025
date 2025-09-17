"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, CheckCircle, Sparkles, Brain } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);"use client";

import type React from "react"; // Technically not needed as React is implicitly available in Next.js client components

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, CheckCircle, Sparkles, Brain, AlertTriangle, Loader2 } from "lucide-react"; // Added AlertTriangle and Loader2
import Link from "next/link";

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null); // State to hold error messages

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError(null); // Clear previous errors
		setIsSubmitted(false); // Reset submitted state in case of retry

		// Simulate API call with a random chance of failure
		try {
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					// Simulate a 70% success rate
					if (Math.random() > 0.3) {
						resolve(true); // Indicate success
					} else {
						// Simulate a specific API error message
						reject(new Error("Failed to send reset link. Please check your email and try again."));
					}
				}, 2000); // Simulate network latency
			});

			setIsSubmitted(true); // Mark as submitted only on success
		} catch (err: any) {
			// Handle API errors
			setError(err.message || "An unexpected error occurred. Please try again later."); // Set error message
			console.error("Password reset API call failed:", err); // Log the error for debugging
		} finally {
			setIsLoading(false); // Always stop loading, whether success or failure
		}
	};

	return (
		<div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
			{/* Animated background */}
			<div className="fixed inset-0 -z-10">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float-slow" />
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float-slower" />

				{/* Grid pattern */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:50px_50px]" />
			</div>

			{/* Floating icons */}
			<div className="fixed top-20 left-20 opacity-20 animate-bounce-slow">
				<Brain className="w-8 h-8 text-purple-400" />
			</div>
			<div className="fixed bottom-20 right-20 opacity-20 animate-bounce-slower">
				<Sparkles className="w-6 h-6 text-pink-400" />
			</div>

			{/* Main content */}
			<div className="w-full max-w-md relative z-10">
				{/* Header */}
				<div className="text-center mb-8">
					<Link href="/" className="inline-block mb-6">
						<span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Simplifai
						</span>
					</Link>
				</div>

				<Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
					{!isSubmitted && !error ? ( // Show form if not submitted and no error
						<>
							<CardHeader className="space-y-1">
								<CardTitle className="text-2xl text-center text-white">Reset Password</CardTitle>
								<CardDescription className="text-center text-zinc-400">
									Enter your email address and we&apos;ll send you a link to reset your password
								</CardDescription>
							</CardHeader>

							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="email" className="text-zinc-300">
											Email
										</Label>
										<div className="relative">
											<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500" />
											<Input
												id="email"
												type="email"
												placeholder="Enter your email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												className="pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
												required
												disabled={isLoading} // Disable input while loading
											/>
										</div>
									</div>

									{error && ( // Display error message if present
										<div className="flex items-center p-3 text-sm text-red-400 border border-red-500/50 rounded-md bg-red-500/10">
											<AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
											<span>{error}</span>
										</div>
									)}

									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium"
										disabled={isLoading}
									>
										{isLoading ? (
											<>
												<Loader2 className="w-4 h-4 animate-spin mr-2" />
												Sending...
											</>
										) : (
											"Send Reset Link"
										)}
									</Button>
								</form>
							</CardContent>
						</>
					) : isSubmitted ? ( // Show success message if submitted successfully
						<>
							<CardHeader className="text-center">
								<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
									<CheckCircle className="w-8 h-8 text-white" />
								</div>
								<CardTitle className="text-2xl text-white">Check your email</CardTitle>
								<CardDescription className="text-zinc-400">
									We&apos;ve sent a password reset link to <strong className="text-white">{email}</strong>
								</CardDescription>
							</CardHeader>

							<CardContent className="text-center space-y-4">
								<p className="text-sm text-zinc-400">
									Didn&apos;t receive the email? Check your spam folder or{" "}
									<button
										onClick={() => {
											setIsSubmitted(false); // Reset to form view
											setError(null); // Clear any previous error state
										}}
										className="text-purple-400 hover:text-purple-300 underline"
									>
										try again
									</button>
								</p>
							</CardContent>
						</>
					) : ( // Show form again if there was an error and the user wants to retry
						<>
							<CardHeader className="space-y-1">
								<CardTitle className="text-2xl text-center text-white">Reset Password</CardTitle>
								<CardDescription className="text-center text-zinc-400">
									Enter your email address and we&apos;ll send you a link to reset your password
								</CardDescription>
							</CardHeader>

							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="email" className="text-zinc-300">
											Email
										</Label>
										<div className="relative">
											<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500" />
											<Input
												id="email"
												type="email"
												placeholder="Enter your email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												className="pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
												required
												disabled={isLoading}
											/>
										</div>
									</div>

									{error && (
										<div className="flex items-center p-3 text-sm text-red-400 border border-red-500/50 rounded-md bg-red-500/10">
											<AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
											<span>{error}</span>
										</div>
									)}

									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium"
										disabled={isLoading}
									>
										{isLoading ? (
											<>
												<Loader2 className="w-4 h-4 animate-spin mr-2" />
												Sending...
											</>
										) : (
											"Send Reset Link"
										)}
									</Button>
								</form>
							</CardContent>
						</>
					)}

					<CardFooter>
						<Link
							href="/signin"
							className="flex items-center justify-center w-full text-sm text-zinc-400 hover:text-white transition-colors"
						>
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to sign in
						</Link>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));
		setIsLoading(false);
		setIsSubmitted(true);
	};

	return (
		<div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
			{/* Animated background */}
			<div className="fixed inset-0 -z-10">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float-slow" />
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float-slower" />

				{/* Grid pattern */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:50px_50px]" />
			</div>

			{/* Floating icons */}
			<div className="fixed top-20 left-20 opacity-20 animate-bounce-slow">
				<Brain className="w-8 h-8 text-purple-400" />
			</div>
			<div className="fixed bottom-20 right-20 opacity-20 animate-bounce-slower">
				<Sparkles className="w-6 h-6 text-pink-400" />
			</div>

			{/* Main content */}
			<div className="w-full max-w-md relative z-10">
				{/* Header */}
				<div className="text-center mb-8">
					<Link href="/" className="inline-block mb-6">
						<span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Simplifai
						</span>
					</Link>
				</div>

				<Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
					{!isSubmitted ? (
						<>
							<CardHeader className="space-y-1">
								<CardTitle className="text-2xl text-center text-white">Reset Password</CardTitle>
								<CardDescription className="text-center text-zinc-400">
									Enter your email address and we&apos;ll send you a link to reset your password
								</CardDescription>
							</CardHeader>

							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="email" className="text-zinc-300">
											Email
										</Label>
										<div className="relative">
											<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500" />
											<Input
												id="email"
												type="email"
												placeholder="Enter your email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												className="pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500"
												required
											/>
										</div>
									</div>

									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium"
										disabled={isLoading}
									>
										{isLoading ? (
											<>
												<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
												Sending...
											</>
										) : (
											"Send Reset Link"
										)}
									</Button>
								</form>
							</CardContent>
						</>
					) : (
						<>
							<CardHeader className="text-center">
								<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
									<CheckCircle className="w-8 h-8 text-white" />
								</div>
								<CardTitle className="text-2xl text-white">Check your email</CardTitle>
								<CardDescription className="text-zinc-400">
									We&apos;ve sent a password reset link to <strong className="text-white">{email}</strong>
								</CardDescription>
							</CardHeader>

							<CardContent className="text-center space-y-4">
								<p className="text-sm text-zinc-400">
									Didn&apos;t receive the email? Check your spam folder or{" "}
									<button
										onClick={() => setIsSubmitted(false)}
										className="text-purple-400 hover:text-purple-300 underline"
									>
										try again
									</button>
								</p>
							</CardContent>
						</>
					)}

					<CardFooter>
						<Link
							href="/signin"
							className="flex items-center justify-center w-full text-sm text-zinc-400 hover:text-white transition-colors"
						>
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to sign in
						</Link>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
