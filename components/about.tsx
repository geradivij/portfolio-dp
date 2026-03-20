'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { withBasePath } from "@/lib/base-path"
import { Code, Lightbulb, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="section-shell w-full px-6 py-24 lg:px-20">
      <div className="mx-auto mb-16 flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        <motion.div
          className="relative h-72 w-72 flex-shrink-0 overflow-hidden rounded-[2rem] border border-primary/20 shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:h-80 md:w-80"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={withBasePath("/divij.jpg")}
            alt="Divij Gera"
            fill
            className="object-cover grayscale-[20%] transition duration-500 hover:grayscale-0"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-background/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            About Me
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Engineering with curiosity, empathy, and sharp execution.</h2>
          <p className="mb-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            I&apos;m Divij Gera, a computer science graduate student at the University of Southern California with a
            background in software engineering from Delhi Technological University. My experience spans enterprise
            engineering at NatWest, product exploration in mental health, and research-heavy work in applied AI.
            <br />
            <br />
            I&apos;m especially drawn to AI and machine learning projects that combine technical depth with a strong user
            outcome. Outside of academics, I enjoy theatre, reading, and building communities at USC. Whether I&apos;m
            debugging a model, shaping a product, or coordinating a team, I care about doing thoughtful work with
            momentum.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {["AI/ML systems", "Research to deployment", "Cross-functional leadership"].map((item) => (
              <div key={item} className="rounded-2xl border bg-background/70 px-4 py-3 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-[1.5rem] bg-background/75">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-primary/10 p-2">
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

        <Card className="rounded-[1.5rem] bg-background/75">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-primary/10 p-2">
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

        <Card className="rounded-[1.5rem] bg-background/75">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-primary/10 p-2">
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
    </section>
  )
}
