import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
