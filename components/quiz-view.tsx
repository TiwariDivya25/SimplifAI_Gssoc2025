"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle } from "lucide-react"

export function QuizView() {
  // This would normally come from your API after processing the document
  const quizQuestions = [
    {
      question: "According to the document, what is the main advantage of AI in education?",
      options: [
        "Reducing teacher workload",
        "Personalizing learning experiences",
        "Lowering educational costs",
        "Standardizing curriculum",
      ],
      correctAnswer: 1,
    },
    {
      question: "What percentage improvement in student outcomes was reported when using AI-assisted learning tools?",
      options: ["17%", "27%", "37%", "47%"],
      correctAnswer: 1,
    },
    {
      question: "What is one ethical concern mentioned regarding AI in education?",
      options: [
        "Job displacement for teachers",
        "Over-reliance on technology",
        "Privacy concerns and digital divide",
        "Decreased student engagement",
      ],
      correctAnswer: 2,
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const handleOptionSelect = (value: string) => {
    setSelectedOption(Number.parseInt(value))
  }

  const handleNext = () => {
    if (selectedOption === null) return

    const isCorrect = selectedOption === quizQuestions[currentQuestion].correctAnswer
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedOption
    setAnswers(newAnswers)

    if (isCorrect) {
      setScore(score + 1)
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setShowResult(false)
    } else {
      setShowResult(true)
    }
  }

  const handleCheck = () => {
    setShowResult(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
  }

  return (
    <div className="max-w-2xl mx-auto">
      {!showResult ? (
        <Card className="backdrop-blur-sm bg-card/90 hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                Question {currentQuestion + 1} of {quizQuestions.length}
              </CardTitle>
              <span className="text-sm font-medium text-muted-foreground">
                Score: {score}/{currentQuestion}
              </span>
            </div>
            <CardDescription>Select the best answer based on the document content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">{quizQuestions[currentQuestion].question}</h3>
              <RadioGroup value={selectedOption?.toString()} onValueChange={handleOptionSelect}>
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 rounded-md border p-3 transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                        selectedOption === index && !showResult ? "border-primary bg-primary/10 scale-[1.02]" : ""
                      } ${
                        showResult && index === quizQuestions[currentQuestion].correctAnswer
                          ? "border-green-500 bg-green-500/10 animate-pulse-gentle"
                          : ""
                      } ${
                        showResult && selectedOption === index && index !== quizQuestions[currentQuestion].correctAnswer
                          ? "border-red-500 bg-red-500/10 animate-bounce-gentle"
                          : ""
                      }`}
                    >
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1">
                        {option}
                      </Label>
                      {showResult && index === quizQuestions[currentQuestion].correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                      {showResult &&
                        selectedOption === index &&
                        index !== quizQuestions[currentQuestion].correctAnswer && (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {!showResult ? (
              <Button onClick={handleCheck} disabled={selectedOption === null}>
                Check Answer
              </Button>
            ) : (
              <Button onClick={handleNext}>
                {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
              </Button>
            )}
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Quiz Results</CardTitle>
            <CardDescription>
              You scored {score} out of {quizQuestions.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 relative">
              <div className="flex items-center justify-center p-6 bg-primary/10 rounded-lg">
                <div className="text-center">
                  <p className="text-5xl font-bold text-primary">{Math.round((score / quizQuestions.length) * 100)}%</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {score === quizQuestions.length
                      ? "Perfect score! Excellent understanding of the material."
                      : score >= quizQuestions.length / 2
                        ? "Good job! You have a solid understanding of the material."
                        : "Keep studying! You'll improve with practice."}
                  </p>
                </div>
              </div>
              {score === quizQuestions.length && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="animate-bounce-slow text-6xl">🎉</div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={resetQuiz} className="w-full">
              Restart Quiz
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
