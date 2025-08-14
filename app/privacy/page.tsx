import type React from "react";

export default function PrivacyPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			{/* Title Section */}
			<div className="max-w-2xl mx-auto text-center">
				<h1 className="text-5xl md:text-6xl font-bold text-gradient-purple-pink mb-4">
					Privacy Policy
				</h1>
				<p className="text-muted-foreground mb-10">
					Last updated: {new Date().toLocaleDateString()}
				</p>
			</div>

			{/* Content */}
			<div className="max-w-3xl mx-auto space-y-8">
				<section className="bg-card p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
					<h2 className="text-2xl font-semibold mb-3">1. Data Collection</h2>
					<p className="text-gray-400 leading-relaxed">
						At <strong>SimplifAI</strong>, we respect your privacy and are committed
						to safeguarding your personal information. We collect only the minimal
						data required to deliver our AI-powered learning services and improve
						user experience.
					</p>
				</section>

				<section className="bg-card p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
					<h2 className="text-2xl font-semibold mb-3">2. Document Processing</h2>
					<p className="text-gray-400 leading-relaxed">
						Any documents you upload are processed securely within our system. They
						are never shared with third parties. Temporary storage is used solely
						for processing purposes, and files are automatically deleted once the
						process is complete.
					</p>
				</section>

				<section className="bg-card p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
					<h2 className="text-2xl font-semibold mb-3">3. Security</h2>
					<p className="text-gray-400 leading-relaxed">
						We employ industry-standard security practices, including encryption
						and secure servers, to protect your data at every step. Regular
						security reviews ensure compliance with privacy regulations and
						safeguard your trust.
					</p>
				</section>

				<section className="bg-card p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
					<h2 className="text-2xl font-semibold mb-3">4. Your Rights</h2>
					<p className="text-gray-400 leading-relaxed">
						You have the right to request access to, correction of, or deletion of
						your personal data. For any privacy-related concerns, you can contact
						our support team at{" "}
						<a
							href="mailto:support@simplifai.com"
							className="text-fuchsia-500 hover:underline"
						>
							support@simplifai.com
						</a>
						.
					</p>
				</section>

				<section className="bg-card p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
					<p className="italic text-sm text-gray-400 text-center md:text-left">
						By using our services, you consent to the terms of this Privacy Policy.
					</p>
				</section>
			</div>
		</div>
	);
}