import type React from "react";
import { Mail, Phone, MapPin, LifeBuoy } from "lucide-react";

export default function ContactPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			{/* Heading */}
			<div className="max-w-2xl mx-auto text-center mb-10">
				<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
					Contact Us
				</h1>
				<p className="text-lg text-muted-foreground leading-relaxed">
					We'd love to hear from you!
					Reach out using any of the options below — we'll get back to you as soon as possible.
				</p>
			</div>

			{/* Contact Cards */}
			<div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
				{/* Email */}
				<div className="bg-card rounded-2xl shadow-lg border border-purple-300 p-6 text-center hover:shadow-xl transition-shadow">
					<Mail className="mx-auto mb-3 text-purple-500" size={32} />
					<h3 className="text-xl font-semibold mb-2">Email</h3>
					<p className="text-muted-foreground">
						<a href="mailto:example@email.com" className="text-primary hover:underline">
							example@email.com
						</a>
					</p>
				</div>

				{/* Phone */}
				<div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-md border border-pink-300 p-6 text-center hover:shadow-lg transition-shadow">
					<Phone className="mx-auto mb-3 text-pink-500" size={32} />
					<h3 className="text-xl font-semibold mb-2">Phone</h3>
					<p className="text-muted-foreground">
						<a href="tel:+15551234567" className="text-primary hover:underline">
							+1 555 123 4567
						</a>
					</p>
				</div>

				{/* Address */}
				<div className="bg-card rounded-2xl shadow-lg border border-purple-300 p-6 text-center hover:shadow-xl transition-shadow">
					<MapPin className="mx-auto mb-3 text-purple-500" size={32} />
					<h3 className="text-xl font-semibold mb-2">Address</h3>
					<p className="text-muted-foreground">
						123 Main Street, Cityville, Country
					</p>
				</div>

				{/* Support */}
				<div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-md border border-pink-300 p-6 text-center hover:shadow-lg transition-shadow">
					<LifeBuoy className="mx-auto mb-3 text-pink-500" size={32} />
					<h3 className="text-xl font-semibold mb-2">Support</h3>
					<p className="text-muted-foreground">
						<a href="mailto:support@example.com" className="text-primary hover:underline">
							support@example.com
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}