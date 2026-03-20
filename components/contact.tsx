"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const contactActions = [
    {
      title: "Email",
      value: "dgera@usc.edu",
      href: "mailto:dgera@usc.edu",
      description: "Best for internship opportunities, research collaborations, and project conversations.",
    },
    {
      title: "LinkedIn",
      value: "/in/divijgera",
      href: "https://www.linkedin.com/in/divijgera/",
      description: "A quick way to connect if you want to chat about AI, product work, or community.",
    },
    {
      title: "GitHub",
      value: "@geradivij",
      href: "https://github.com/geradivij",
      description: "Browse repositories, experiments, and the technical side of my work.",
    },
  ]

  return (
    <section id="contact" className="section-shell py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-background/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Get In Touch
            </div>
            <h2 className="text-3xl font-bold md:text-5xl">Let&apos;s build something thoughtful.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              I&apos;m always up for discussing AI engineering roles, research collaborations, startup ideas, or just
              meeting people building ambitious things.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-[2rem] bg-background/75">
              <CardHeader>
                <CardTitle className="text-2xl">Where I am and how I work</CardTitle>
                <CardDescription className="text-base leading-7">
                  I like projects that sit at the intersection of strong technical depth and clear user value.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:dgera@usc.edu" className="text-muted-foreground transition-colors hover:text-primary">
                      dgera@usc.edu
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">+1 (425) 209-6991</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Los Angeles, California</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-primary/10 p-4 text-sm leading-6 text-muted-foreground">
                  Especially interested in AI engineering internships, research opportunities, and teams building
                  practical, high-agency products.
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {contactActions.map((action) => (
                <Card
                  key={action.title}
                  className="rounded-[1.5rem] bg-background/75 transition-transform duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between gap-4">
                    <div className="font-mono text-sm text-muted-foreground">{action.value}</div>
                    <Button className="rounded-full" asChild>
                      <a
                        href={action.href}
                        target={action.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        Reach Out
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}

              <Card className="rounded-[1.5rem] border-dashed bg-transparent">
                <CardContent className="p-6">
                  <p className="text-sm leading-7 text-muted-foreground">
                    If you&apos;re reaching out about a role or project, I&apos;m most excited by problems involving LLMs,
                    multimodal systems, computer vision, fairness in AI, or product-focused automation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
