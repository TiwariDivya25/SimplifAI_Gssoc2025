import { BookOpen, FileText, FlaskConical, ListChecks, MessageSquare } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Smart Flashcards",
      description: "AI-generated flashcards to help you memorize key concepts quickly",
      gradient: "text-gradient-blue-cyan",
      bgGradient: "bg-blue-500/10",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Concise Summaries",
      description: "Get the main points of any document without reading the entire text",
      gradient: "text-gradient-green-emerald",
      bgGradient: "bg-green-500/10",
    },
    {
      icon: <ListChecks className="w-10 h-10" />,
      title: "Interactive Quizzes",
      description: "Test your knowledge with automatically generated quizzes",
      gradient: "text-gradient-purple-pink",
      bgGradient: "bg-purple-500/10",
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Ask Questions",
      description: "Chat with your document to get instant answers to your questions",
      gradient: "bg-gradient-orange-red",
      bgGradient: "bg-orange-500/10",
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: "Multiple Formats",
      description: "Support for PDF, DOCX, TXT and more file formats",
      gradient: "bg-gradient-indigo-purple",
      bgGradient: "bg-indigo-500/10",
    },
  ]

  return (
    <>
      {features.map((feature, index) => (
        <div
          key={index}
          className="group flex flex-col items-center p-6 text-center rounded-xl bg-card border hover:border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up cursor-pointer"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div
            className={`p-4 mb-4 rounded-full ${feature.bgGradient} group-hover:scale-110 transition-all duration-300`}
          >
            <div className={`${feature.gradient} group-hover:animate-pulse`}>{feature.icon}</div>
          </div>
          <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {feature.description}
          </p>
        </div>
      ))}
    </>
  )
}
