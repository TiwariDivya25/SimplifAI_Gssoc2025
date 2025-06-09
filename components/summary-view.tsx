import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SummaryView() {
  // This would normally come from your API after processing the document
  const summaryData = {
    mainPoints: [
      "The document discusses the impact of artificial intelligence on modern education systems.",
      "It highlights how AI tools can personalize learning experiences for students.",
      "The paper examines potential ethical concerns around AI in educational settings.",
      "Research shows a 27% improvement in student outcomes when using AI-assisted learning tools.",
    ],
    keyInsights:
      "The integration of AI in education represents a paradigm shift in how knowledge is transferred and acquired. While there are significant benefits in terms of personalization and efficiency, careful consideration must be given to privacy concerns and the potential widening of the digital divide.",
    recommendations: [
      "Educational institutions should develop clear policies on AI tool usage.",
      "Teachers should receive proper training on how to effectively incorporate AI into their curriculum.",
      "Regular assessments should be conducted to measure the impact of AI tools on learning outcomes.",
    ],
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Main Points</CardTitle>
          <CardDescription>Key concepts extracted from your document</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {summaryData.mainPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="flex items-center justify-center w-6 h-6 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {index + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
          <CardDescription>The core message of the document</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{summaryData.keyInsights}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
          <CardDescription>Suggested actions based on the document</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {summaryData.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="flex items-center justify-center w-6 h-6 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {index + 1}
                </span>
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
