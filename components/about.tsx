import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a Computer Science graduate student at USC with a passion for artificial intelligence and machine
                learning. My journey spans from software engineering to AI research, with hands-on experience in
                healthcare AI, NLP, and generative models.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                During my career, I've worked on diverse projects ranging from enterprise cloud migrations to AI-powered
                mental health applications. I specialize in building intelligent systems that solve real-world problems,
                with expertise in GenAI, LLMs, and deep learning architectures.
              </p>
              <p className="text-lg text-muted-foreground">
                I'm actively seeking opportunities to continue pushing the innovation boundaries of intelligent systems
                and contribute to cutting-edge AI research and development.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI & ML Expert</h3>
                      <p className="text-sm text-muted-foreground">
                        Specialized in GenAI, LLMs, and deep learning architectures
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Research to Production</h3>
                      <p className="text-sm text-muted-foreground">
                        Delivering high-impact models from research to real-world deployment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Cross-functional Leader</h3>
                      <p className="text-sm text-muted-foreground">
                        Product management and technical leadership experience
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
