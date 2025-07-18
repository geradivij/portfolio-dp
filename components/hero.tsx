"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Hi, I'm{" "}
            <span
              className={`text-primary inline-block transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Divij Gera
            </span>
          </h1>
          <h2
            className={`text-xl md:text-2xl text-muted-foreground mb-8 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            AI Engineer & Software Developer
          </h2>
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Computer Science graduate with hands-on experience in AI, machine learning, and GenAI. Skilled in LLMs, deep
            learning, and prompt engineering with a track record of delivering high-impact models from research to
            real-world deployment.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button size="lg" asChild>
              <a href="mailto:dgera@usc.edu">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div
            className={`flex justify-center space-x-6 transition-all duration-1000 delay-1200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a href="https://github.com/geradivij" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 transition-transform">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/divijgera/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="mailto:dgera@usc.edu">
              <Button variant="ghost" size="icon" className="h-12 w-12 hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
