import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/base-path"
import { ArrowDownRight, BrainCircuit, Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const highlights = [
    { label: "AI systems shipped", value: "7+" },
    { label: "Research + product blend", value: "USC x NatWest" },
    { label: "Hackathon builds", value: "2 flagship entries" },
  ]

  return (
    <section className="section-shell relative flex min-h-screen items-center pt-28">
      <div className="absolute inset-x-0 top-28 mx-auto hidden h-72 max-w-5xl rounded-full bg-primary/10 blur-3xl md:block" />
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-[fadeInUp_700ms_ease-out]">
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Divij Gera
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-primary md:text-3xl">
              AI Engineer & Software Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
              USC computer science grad student building practical AI systems across LLMs, computer vision, research,
              and product-focused engineering.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-7" asChild>
                <a href="#projects">
                  Explore Projects
                  <ArrowDownRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent px-7" asChild>
                <a href={withBasePath("/resume.pdf")} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="glass-panel rounded-2xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</div>
                  <div className="mt-2 text-xl font-semibold">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a href="https://github.com/geradivij" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full border border-border/80 transition-transform hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/divijgera/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full border border-border/80 transition-transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:dgera@usc.edu">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full border border-border/80 transition-transform hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="relative animate-[fadeInUp_900ms_ease-out]">
            <div className="glass-panel relative rounded-[2rem] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">Live Snapshot</div>
                  <div className="mt-2 text-2xl font-semibold">Research x Product x Hackathons</div>
                </div>
                <div className="rounded-full bg-primary/15 p-3 text-primary [animation:pulseGlow_4s_ease-in-out_infinite]">
                  <BrainCircuit className="h-6 w-6" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4 [animation:float_6s_ease-in-out_infinite]">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Current focus</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Building agentic, multimodal, and fairness-aware systems with a strong bias toward usable demos and
                    measurable impact.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border bg-background/80 p-4">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Featured builds</div>
                    <p className="mt-2 text-sm text-muted-foreground">InstaNova, Alzi, medical LLM bias detection</p>
                  </div>
                  <div className="rounded-2xl border bg-background/80 p-4">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Strengths</div>
                    <p className="mt-2 text-sm text-muted-foreground">LLMs, CV, deep learning, product execution</p>
                  </div>
                </div>
                <div className="rounded-2xl border bg-background/80 p-4">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Open to</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    AI engineering internships, research collaborations, and startup teams building ambitious products.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
