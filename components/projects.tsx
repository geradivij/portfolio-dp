import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, FileText } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Music Genre Transfer Using Deep Generative Architectures",
      description:
        "Prototyped music genre transformation pipeline using Transformer, CycleGAN, VAE, StarGAN, and MusicGen. Adapted MusicGen LLM for audio-to-audio genre transfer with real-time creative remixing through web interface.",
      technologies: ["PyTorch", "Transformers", "GANs", "VAE", "MusicGen", "Audio Processing"],
      github: "https://github.com/geradivij/Music-Genre-Transformation",
      demo: "#", // Placeholder until deployed
      report: "/public/music-genre.pdf",
      image: "/placeholder.svg?height=200&width=400",
      disableDemo: true,
    },
    {
      title: "Bias Detection and Mitigation in Clinical LLMs",
      description:
        "Built bias detection framework using ClinicalBERT and BioGPT on MIMIC-III EHR data. Applied fairness mitigation techniques that reduced Mean Prediction Disparity by 50%+ without impacting model accuracy.",
      technologies: ["BERT", "GPT", "NLP", "Healthcare AI", "Fairness ML", "Python"],
      github: "https://github.com/geradivij/Bias-Detection-in-LLMs",
      demo: null,
      report: "public//bias-llm.pdf",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Alzi - AI Companion for Alzheimer's Patients",
      description:
        "Alzi is an AI companion designed to help people in the early stages of Alzheimer's. It helps patients recognize familiar faces, responds in voices they know and love, keeps track of conversation context, assists with daily tasks, and provides helpful reminders throughout the day.",
      technologies: ["AI/ML", "Voice Synthesis", "Computer Vision", "NLP", "Healthcare AI", "Context Management"],
      github: "https://github.com/Arshia786-stack/Alzi",
      demo: "#",
      report: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Retinal Fundus Image Analysis for CVD Risk Prediction",
      description:
        "AI-powered classification models to identify cardiovascular disease risk using retinal fundus images. Collaborating with PhD candidates under Prof. Anita Penkova at USC to apply agentic AI techniques in biomedical imaging.",
      technologies: ["Python", "Deep Learning", "Computer Vision", "LLMs", "GenAI", "Medical Imaging"],
      github: null,
      demo: null,
      report: null,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="bg-background text-foreground">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        disabled={project.disableDemo}
                        className={
                          project.disableDemo
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-[#f6e27f] text-black hover:bg-[#e6d766]"
                        }
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.report && (
                      <a href={project.report} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Report
                        </Button>
                      </a>
                    )}
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
