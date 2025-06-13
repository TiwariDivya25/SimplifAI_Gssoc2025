import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultsHeader } from "@/components/results-header";
import { FlashcardView } from "@/components/flashcard-view";
import { SummaryView } from "@/components/summary-view";
import { QuizView } from "@/components/quiz-view";

interface ResultsPageProps {
	params: Promise<{ fileId: string }>;
}
export default async function ResultsPage({ params }: ResultsPageProps) {
	const { fileId } = await params; // await the async params
	const fileName = decodeURIComponent(fileId);
	// export default async function ResultsPage({ params }: { params: { fileId: string } }) {
	// 	params = await params;
	// 	const index = params.fileId;

	return (
		<main className="min-h-screen bg-muted/30">
			<ResultsHeader fileName={fileName} />

			<div className="container px-4 py-8 mx-auto">
				<Tabs defaultValue="summary" className="w-full">
					<TabsList className="grid w-full grid-cols-3 mb-8">
						<TabsTrigger value="summary">Summary</TabsTrigger>
						<TabsTrigger value="flashcards">Flashcards</TabsTrigger>
						<TabsTrigger value="quiz">Quiz</TabsTrigger>
					</TabsList>
					<TabsContent value="summary">
						<SummaryView />
					</TabsContent>
					<TabsContent value="flashcards">
						<FlashcardView />
					</TabsContent>
					<TabsContent value="quiz">
						<QuizView />
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
