"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, FileText } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Bias Detection in LLMs",
      description:
        "Developed a robust system to detect and mitigate biases in Large Language Models, ensuring fairness and ethical AI deployment.",
      technologies: ["Python", "PyTorch", "NLP", "Transformers", "Fairness AI"],
      githubLink: "https://github.com/geradivij/bias-detection-llms",
      reportLink: "/bias-detection.pdf",
      liveLink: "#", // Placeholder for live demo
    },
    {
      title: "Music Genre Classification",
      description:
        "Built a deep learning model to accurately classify music genres from audio features, achieving high precision on a diverse dataset.",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Audio Processing", "CNNs"],
      githubLink: "https://github.com/geradivij/music-genre-classification",
      reportLink: "/music-genre.pdf",
      liveLink: "#", // Placeholder for live demo
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed this responsive personal portfolio website to showcase projects, skills, and experience using modern web technologies.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
      githubLink: "https://github.com/geradivij/personal-portfolio",
      reportLink: null, // No specific report for this project
      liveLink: "https://divijgera.vercel.app", // Example live link
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0 flex flex-wrap gap-3">
                  {project.githubLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.reportLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.reportLink} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Report
                      </a>
                    </Button>
                  )}
                  {project.liveLink && project.liveLink !== "#" && (
                    <Button size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
