import React, { useState } from "react";
import { Mail, ArrowLeft, CheckCircle, Sparkles, Brain } from "lucide-react";

// In-line components to make the code self-contained
const Button = ({ children, className, type, onClick, disabled }) => (
	<button
		type={type}
		onClick={onClick}
		disabled={disabled}
		className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 ${className}`}
	>
		{children}
	</button>
);

const Card = ({ children, className }) => (
	<div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
		{children}
	</div>
);

const CardHeader = ({ children, className }) => (
	<div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
		{children}
	</div>
);

const CardTitle = ({ children, className }) => (
	<h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
		{children}
	</h3>
);

const CardDescription = ({ children, className }) => (
	<p className={`text-sm text-muted-foreground ${className}`}>
		{children}
	</p>
);

const CardContent = ({ children, className }) => (
	<div className={`p-6 pt-0 ${className}`}>
		{children}
	</div>
);

const CardFooter = ({ children, className }) => (
	<div className={`flex items-center p-6 pt-0 ${className}`}>
		{children}
	</div>
);

const Input = ({ className, type, placeholder, value, onChange, required, id }) => (
	<input
		id={id}
		type={type}
		placeholder={placeholder}
		value={value}
		onChange={onChange}
		required={required}
		className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
	/>
);

const Label = ({ children, htmlFor, className }) => (
	<label
		htmlFor={htmlFor}
		className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
	>
		{children}
	</label>
);

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));
		setIsLoading(false);
		setIsSubmitted(true);
	};

	return (
		<div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6 font-inter">
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
					<a href="#" className="inline-block mb-6">
						<span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Simplifai
						</span>
					</a>
				</div>

				<Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm rounded-xl">
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
												className="pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-purple-500 rounded-lg"
												required
											/>
										</div>
									</div>

									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg"
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
						<a
							href="#"
							className="flex items-center justify-center w-full text-sm text-zinc-400 hover:text-white transition-colors"
						>
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to sign in
						</a>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
