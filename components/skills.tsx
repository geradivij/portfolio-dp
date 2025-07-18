import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sparkles,
  Brain,
  Cog,
  Bot,
  Layers,
  Type,
  Languages,
  Eye,
  Code,
  Database,
  SquareStack,
  Flame,
  Heart,
  Cloud,
  Gitlab,
  Github,
  Monitor,
  Book,
  MousePointer2,
  ShieldCheck,
  Container,
  RefreshCw,
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "GenAI", icon: <Sparkles className="w-4 h-4" /> },
        { name: "LLMs", icon: <Brain className="w-4 h-4" /> },
        { name: "AI Engineering", icon: <Cog className="w-4 h-4" /> },
        { name: "Agentic AI", icon: <Bot className="w-4 h-4" /> },
        { name: "Deep Learning", icon: <Layers className="w-4 h-4" /> },
        { name: "Prompt Engineering", icon: <Type className="w-4 h-4" /> },
        { name: "NLP", icon: <Languages className="w-4 h-4" /> },
        { name: "Computer Vision", icon: <Eye className="w-4 h-4" /> },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <Code className="w-4 h-4" /> },
        { name: "C", icon: <Code className="w-4 h-4" /> },
        { name: "C++", icon: <Code className="w-4 h-4" /> },
        { name: "SQL", icon: <Database className="w-4 h-4" /> },
        { name: "JavaScript", icon: <Code className="w-4 h-4" /> },
        { name: "TypeScript", icon: <Code className="w-4 h-4" /> },
      ],
    },
    {
      title: "AI Tools & Libraries",
      skills: [
        { name: "TensorFlow", icon: <SquareStack className="w-4 h-4" /> },
        { name: "PyTorch", icon: <Flame className="w-4 h-4" /> },
        { name: "Hugging Face", icon: <Heart className="w-4 h-4" /> },
        { name: "OpenAI API", icon: <Bot className="w-4 h-4" /> },
        { name: "Scikit-learn", icon: <SquareStack className="w-4 h-4" /> },
        { name: "Transformers", icon: <RefreshCw className="w-4 h-4" /> },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "GitHub", icon: <Github className="w-4 h-4" /> },
        { name: "VSCode", icon: <Monitor className="w-4 h-4" /> },
        { name: "Jupyter", icon: <Book className="w-4 h-4" /> },
        { name: "Google Colab", icon: <Cloud className="w-4 h-4" /> },
        { name: "Cursor", icon: <MousePointer2 className="w-4 h-4" /> },
        { name: "GitHub Copilot", icon: <Bot className="w-4 h-4" /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
        { name: "CI/CD", icon: <RefreshCw className="w-4 h-4" /> },
        { name: "DevSecOps", icon: <ShieldCheck className="w-4 h-4" /> },
        { name: "Kubernetes", icon: <Container className="w-4 h-4" /> },
        { name: "GitLab", icon: <Gitlab className="w-4 h-4" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill.icon}
                      {skill.name}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
