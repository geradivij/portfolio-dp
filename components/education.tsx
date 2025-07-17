import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Master of Science in Computer Science</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      University of Southern California
                    </CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <Calendar className="mr-1 h-4 w-4" />
                      Aug 2024 - Present
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold">GPA: 4.0/4.0</div>
                    <div className="text-sm text-muted-foreground">Perfect GPA</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Artificial Intelligence",
                        "Machine Learning",
                        "Deep Learning",
                        "Computer Vision",
                        "Natural Language Processing",
                        "Generative AI",
                        "Large Language Models",
                        "AI Engineering",
                      ].map((course, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Current Research:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Retinal Fundus Image Analysis for Cardiovascular Disease Risk Prediction</li>
                      <li>Agentic AI techniques in biomedical imaging</li>
                      <li>Collaborating with PhD candidates under Prof. Anita Penkova</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Bachelor of Technology in Software Engineering</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      Delhi Technological University
                    </CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <Calendar className="mr-1 h-4 w-4" />
                      Aug 2019 - May 2023
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold">CGPA: 9.09/10</div>
                    <div className="text-sm text-muted-foreground">First Class with Distinction</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Leadership & Activities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Head of Production & Finance - Pratibimb (The Dramatics Society)</li>
                      <li>Organized award-winning annual productions recognized across India</li>
                      <li>Secured annual college funding of Rs. 250,000 for the society</li>
                      <li>Managed public relations, finances, and team coordination</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Technical Skills</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• AI Engineering & Agentic AI</li>
                    <li>• Large Language Models (LLMs)</li>
                    <li>• Generative AI & Prompt Engineering</li>
                    <li>• Computer Vision & NLP</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Research Interests</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Healthcare AI & Medical Imaging</li>
                    <li>• Bias Detection in AI Systems</li>
                    <li>• Music Generation & Audio AI</li>
                    <li>• Fairness in Machine Learning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
