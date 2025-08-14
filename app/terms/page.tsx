import type React from "react";

export default function TermsPage() {
	return (
		<div className="container mx-auto px-4 py-12 sm:py-16">
			<div className="max-w-4xl mx-auto">
				{/* Page Title */}
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-purple-pink mb-4 text-center">
					Terms & Conditions
				</h1>

				<p className="text-center text-gray-400 mb-12 text-sm sm:text-base">
					Last Updated: {new Date().toLocaleDateString()}
				</p>

				{/* Dark Cards */}
				<div className="space-y-6 sm:space-y-8">
					{[
						{
							title: "1. Acceptance of Terms",
							content: (
								<p className="text-gray-300">
									By accessing or using <strong>SimplifAI</strong> (“the Service”), you agree
									to be bound by these Terms & Conditions and our{" "}
									<a
										href="/privacy-policy"
										className="text-fuchsia-400 hover:underline"
									>
										Privacy Policy
									</a>
									. If you do not agree, you must not use our Service.
								</p>
							),
						},
						{
							title: "2. Description of Service",
							content: (
								<p className="text-gray-300">
									SimplifAI is an AI-powered platform designed to help you transform
									documents into learning materials. The Service is provided for lawful
									purposes only and is subject to change or discontinuation at our
									discretion.
								</p>
							),
						},
						{
							title: "3. User Responsibilities",
							content: (
								<ul className="list-disc pl-6 space-y-2 text-gray-300">
									<li>You are responsible for the content you upload and process.</li>
									<li>You agree not to use the Service for illegal or harmful purposes.</li>
									<li>You will not attempt to disrupt or exploit the platform’s systems.</li>
								</ul>
							),
						},
						{
							title: "4. Intellectual Property",
							content: (
								<p className="text-gray-300">
									All intellectual property related to the Service, including but not limited
									to software, design, branding, and AI models, is owned by SimplifAI or its
									licensors. You may not reproduce, distribute, or modify any part of the
									Service without prior written consent.
								</p>
							),
						},
						{
							title: "5. AI-Generated Content Disclaimer",
							content: (
								<p className="text-gray-300">
									AI-generated outputs may not always be accurate, complete, or up-to-date.
									You should independently verify information before relying on it.
									SimplifAI is not responsible for any decisions made based on AI-generated
									content.
								</p>
							),
						},
						{
							title: "6. Limitation of Liability",
							content: (
								<p className="text-gray-300">
									The Service is provided “as is” without any warranties. To the maximum
									extent permitted by law, SimplifAI shall not be liable for any damages
									arising from your use of the Service.
								</p>
							),
						},
						{
							title: "7. Termination",
							content: (
								<p className="text-gray-300">
									We reserve the right to suspend or terminate your access to the Service at
									any time, without prior notice, if we believe you have violated these
									Terms.
								</p>
							),
						},
						{
							title: "8. Governing Law",
							content: (
								<p className="text-gray-300">
									These Terms are governed by and construed in accordance with the laws of
									your jurisdiction. Any disputes shall be resolved exclusively in the
									competent courts of that jurisdiction.
								</p>
							),
						},
						{
							title: "9. Changes to Terms",
							content: (
								<p className="text-gray-300">
									We may update these Terms from time to time. Continued use of the Service
									after changes means you accept the revised Terms.
								</p>
							),
						},
						{
							title: "10. Contact Us",
							content: (
								<p className="text-gray-300">
									If you have any questions about these Terms, please contact us at{" "}
									<a
										href="mailto:contact@simplifai.com"
										className="text-fuchsia-400 hover:underline"
									>
										contact@simplifai.com
									</a>
									.
								</p>
							),
						},
					].map((section, idx) => (
						<div
							key={idx}
							className="p-5 sm:p-6 border border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-900"
						>
							<h2 className="text-xl sm:text-2xl font-bold mb-3 text-white">{section.title}</h2>
							{section.content}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}