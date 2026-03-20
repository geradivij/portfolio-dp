"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { withBasePath } from "@/lib/base-path"
import { ExternalLink, FileText, Github, Sparkles, Trophy } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "InstaNova",
      description:
        "A local desktop focus assistant that monitors behavior and webcam signals, estimates cognitive load, and triggers nudges, break overlays, and distraction-reduction actions when overload is detected.",
      technologies: ["Python", "Computer Vision", "Agent Loop", "Gemma", "LoRA", "Desktop Automation"],
      context: "Instalily x Google DeepMind Hackathon",
      impact: "Multimodal productivity assistant built around real-time cognitive-state feedback.",
      githubLink: "https://github.com/geradivij/instanova",
      reportLink: null,
      liveLink: null,
      featured: true,
    },
    {
      title: "Bias Detection in Medical LLMs",
      description:
        "Developed a robust system to detect and mitigate biases in medical large language models, particularly BioGPT and ClinicalBERT, to support fairer and more ethical AI deployment.",
      technologies: ["Python", "PyTorch", "NLP", "Transformers", "Fairness AI"],
      context: "Research project",
      impact: "Fairness analysis pipeline across healthcare-focused LLMs.",
      githubLink: "https://github.com/geradivij/bias-detection-llms",
      reportLink: "/bias-detection.pdf",
      liveLink: "#",
    },
    {
      title: "Music Genre Transfer using Deep Generative Architectures",
      description:
        "Built a generative AI pipeline to convert songs from one genre to another while preserving their underlying structure using models like MusicGen, CycleGAN, and VAE.",
      technologies: ["Python", "MusicGen", "CycleGAN", "Transformers", "Audio Processing", "Deep Learning"],
      context: "Deep generative audio project",
      impact: "Style-transfer workflow for music while preserving melodic structure.",
      githubLink: "https://github.com/geradivij/music-genre-classification",
      reportLink: "/music-genre.pdf",
      liveLink: "#",
    },
    {
      title: "Alzi - AI Companion for Alzheimer's Patients",
      description:
        "An AI-based mobile assistant that helps Alzheimer's patients recognize familiar faces, stay on schedule with reminders, and interact via voice cloning in known voices.",
      technologies: ["Flutter", "Vocal Cloning", "InsightFace", "LMNT TTS", "Firebase", "LLMs", "Voice AI"],
      context: "Cal Hacks 12",
      impact: "Hackathon-built mobile companion designed around memory, recognition, and comfort.",
      githubLink: "https://github.com/Arshia786-stack/Alzi",
      reportLink: null,
      liveLink: "#",
      featured: true,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed this responsive personal portfolio website to showcase projects, skills, and experience using modern web technologies.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      context: "Personal brand and showcase",
      impact: "Responsive frontend built to present work, background, and contact paths clearly.",
      githubLink: "https://github.com/geradivij/personal-portfolio",
      reportLink: null,
      liveLink: "https://divijgera.vercel.app",
    },
    {
      title: "Retinal Fundus Image Analysis for Cardiovascular Risk",
      description:
        "Built AI models to predict cardiovascular disease risk from retinal fundus images under Prof Anita Penkova at the University of Southern California, using deep learning and agentic AI techniques in collaboration with multiple research teams.",
      technologies: ["Python", "Deep Learning", "Computer Vision", "Medical Imaging", "LLMs"],
      context: "USC research collaboration",
      impact: "Applied medical imaging models to clinically relevant cardiovascular risk signals.",
      githubLink: null,
      reportLink: null,
      liveLink: null,
    },
    {
      title: "Pneumonia Detection from Chest X-rays",
      description:
        "Developed a convolutional neural network to classify pneumonia from chest X-ray images with high precision using a publicly available medical dataset.",
      technologies: ["Python", "TensorFlow", "CNN", "Medical Imaging"],
      context: "Medical imaging project",
      impact: "Built a focused diagnostic classifier on chest X-ray data.",
      githubLink: "https://github.com/geradivij/Pneumonia-CNNs",
      reportLink: null,
      liveLink: null,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-shell py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Featured Projects
            </div>
            <h2 className="text-3xl font-bold md:text-5xl">A few projects I&apos;ve built across AI, research, and product.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From hackathons to research collaborations, this is the work that best reflects how I think, build, and
              turn ideas into useful systems.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden rounded-[2rem] border-primary/15 bg-gradient-to-br from-background via-background to-primary/5 shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <Badge className="rounded-full bg-primary/15 px-3 py-1 text-primary hover:bg-primary/15">
                      <Trophy className="mr-1 h-3.5 w-3.5" />
                      {project.context}
                    </Badge>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Featured</div>
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-7 text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-2xl border border-primary/10 bg-background/80 p-4">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Why it stands out</div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.githubLink && (
                      <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.reportLink && (
                      <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                        <a href={withBasePath(project.reportLink)} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Report
                        </a>
                      </Button>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <Button size="sm" className="rounded-full" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <Card
                key={project.title}
                className="flex h-full flex-col rounded-[1.5rem] border-border/70 bg-background/75 shadow-[0_18px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)]"
              >
                <CardHeader>
                  <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {project.context}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="leading-7">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="flex flex-wrap gap-3 p-6 pt-0">
                  {project.githubLink && (
                    <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.reportLink && (
                    <Button variant="outline" size="sm" className="rounded-full bg-transparent" asChild>
                      <a href={withBasePath(project.reportLink)} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Report
                      </a>
                    </Button>
                  )}
                  {project.liveLink && project.liveLink !== "#" && (
                    <Button size="sm" className="rounded-full" asChild>
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
