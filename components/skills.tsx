import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        "GenAI",
        "LLMs",
        "AI Engineering",
        "Agentic AI",
        "Deep Learning",
        "Prompt Engineering",
        "NLP",
        "Computer Vision",
      ],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "SQL", "JavaScript", "TypeScript"],
    },
    {
      title: "AI Tools & Libraries",
      skills: ["TensorFlow", "PyTorch", "Hugging Face", "OpenAI API", "Scikit-learn", "Transformers"],
    },
    {
      title: "Development Tools",
      skills: ["GitHub", "VSCode", "Jupyter", "Google Colab", "Cursor", "GitHub Copilot"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "CI/CD", "DevSecOps", "Kubernetes", "GitLab", "Snowflake", "Informatica"],
    },
    {
      title: "Data & Analytics",
      skills: ["Data Science", "MySQL", "Information Retrieval", "Data Analytics", "Statistical Analysis"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
