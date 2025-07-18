"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function Experience() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return

      const section = sectionRef.current
      const timeline = timelineRef.current
      const rect = section.getBoundingClientRect()
      const timelineRect = timeline.getBoundingClientRect()

      const windowHeight = window.innerHeight
      const timelineHeight = timelineRect.height

      // Calculate when timeline starts and ends being visible
      const timelineStart = timelineRect.top
      const timelineEnd = timelineRect.bottom

      // Calculate progress based on how much of timeline is above viewport
      let progress = 0

      // If the top of the timeline is within the viewport (or above it)
      if (timelineStart <= windowHeight) {
        // Calculate how much of the timeline has scrolled past the middle of the viewport
        const scrolled = windowHeight / 2 - timelineStart
        progress = Math.min(100, Math.max(0, (scrolled / timelineHeight) * 100))
      }

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experiences = [
    {
      title: "Software Engineer",
      company: "NatWest Group",
      location: "London, UK",
      duration: "Jul 2023 - Jul 2024",
      description: [
        "Developed and implemented strategy to migrate organization's entire codebase (70K+ projects) from on-prem to AWS cloud",
        "Designed and developed pipelines to detect changes and modify code visibility for open-source culture",
        "Performed data analytics on GitLab CI/CD runners to ensure CI/CD health and improve team productivity",
        "Led cloud migration initiatives to protect against data loss and improve system reliability",
      ],
      technologies: ["AWS", "GitLab", "CI/CD", "DevSecOps", "Data Analytics", "Cloud Migration"],
    },
    {
      title: "Product Manager",
      company: "Get Me Therapy",
      location: "Remote",
      duration: "Jul 2022 - Jul 2023",
      description: [
        "Executed end-to-end development of AI-enhanced mental health programs, driving 15% revenue growth",
        "Developed automation processes to reduce operational load and increase productivity",
        "Spearheaded design and development of the application MVP (minimum viable product)",
        "Led cross-functional teams to deliver innovative healthcare solutions",
      ],
      technologies: ["Product Management", "AI/ML", "Healthcare", "MVP Development", "Automation"],
    },
    {
      title: "Data Analytics Intern",
      company: "NatWest Group",
      location: "London, UK",
      duration: "Jun 2022 - Aug 2022",
      description: [
        "Constructed data mappings and workflows to migrate historic and current load processes to new tooling",
        "Retrieved and rewrote Relational Database scripts for Snowflake tool migration",
        "Collaborated with senior engineers on database optimization and migration strategies",
        "Gained hands-on experience with enterprise-scale data processing systems",
      ],
      technologies: ["Snowflake", "SQL", "Data Migration", "Database Management", "ETL"],
    },
    {
      title: "Intern",
      company: "Favcy Venture Builders",
      location: "Remote",
      duration: "Aug 2021 - Feb 2022",
      description: [
        "Collaborated on management of the Openbook VC project, coordinating between various teams",
        "Compiled Lifetime Value and Customer Acquisition Cost valuations for startups",
        "Produced UX templates for startup clients according to their business requirements",
        "Gained experience in venture capital and startup ecosystem",
      ],
      technologies: ["Project Management", "Financial Analysis", "UX Design", "Startup Operations"],
    },
  ]

  return (
    <section id="experience" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>

          <div className="relative" ref={timelineRef}>
            {/* Timeline line background */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-border rounded-full hidden md:block"></div>

            {/* Timeline progress line */}
            <div
              className="absolute left-8 top-0 w-1 bg-gradient-to-b from-primary to-amber-600 rounded-full hidden md:block transition-all duration-100 ease-out"
              style={{
                height: `${scrollProgress}%`,
                boxShadow: scrollProgress > 0 ? "0 0 10px rgba(var(--primary-rgb),0.3)" : "none",
              }}
            ></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                // Calculate if this experience dot should be filled
                const experienceProgressThreshold = ((index + 0.5) / experiences.length) * 100 // Activate slightly before center
                const isActive = scrollProgress >= experienceProgressThreshold

                return (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot - fills when timeline reaches it */}
                    <div
                      className={`absolute left-6 w-6 h-6 rounded-full border-4 border-background shadow-lg hidden md:block z-10 transition-all duration-500 ${
                        isActive ? "bg-primary scale-110 shadow-primary/30" : "bg-muted-foreground/30 scale-100"
                      }`}
                    >
                      {/* Inner glow effect when active */}
                      {isActive && <div className="absolute inset-1 bg-primary/20 rounded-full animate-pulse"></div>}
                    </div>

                    {/* Content */}
                    <div className="md:ml-16 w-full">
                      <Card
                        className={`transition-all duration-500 ${
                          isActive ? "hover:shadow-xl shadow-lg scale-[1.01] border-primary/20" : "hover:shadow-lg"
                        }`}
                      >
                        <CardHeader>
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-xl flex items-center gap-2">
                                <Building
                                  className={`h-5 w-5 transition-colors duration-300 ${
                                    isActive ? "text-primary" : "text-muted-foreground"
                                  }`}
                                />
                                {exp.title}
                              </CardTitle>
                              <CardDescription className="text-lg font-medium text-primary mt-1">
                                {exp.company}
                              </CardDescription>
                            </div>
                            <div className="flex flex-col lg:items-end mt-3 lg:mt-0 space-y-1">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-2 h-4 w-4" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="mr-2 h-4 w-4" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                            {exp.description.map((item, itemIndex) => (
                              <li key={itemIndex} className="leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
