'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-white text-black px-6 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-16">

        {/* IMAGE */}
        <motion.div
          className="flex-shrink-0 w-72 h-72 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-black"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/divij.jpg"
            alt="Divij Gera"
            fill
            className="object-cover grayscale hover:grayscale-0 transition duration-500"
          />
        </motion.div>


        {/* TEXT */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
            I'm Divij Gera, a Computer Science graduate student at the University of Southern California, with a background in Software Engineering from Delhi Technological University. Previously, I worked at NatWest Group, where I bridged roles in development and data analytics, and explored mental health product design as a PM at Get Me Therapy. 
            <br /><br />
            I'm especially passionate about artificial intelligence and machine learning — building solutions that feel equal parts creative and technical. Outside of academics, I enjoy storytelling through theatre, reading and contributing to student communities at USC. Whether it's debugging code or organizing an event, I find joy in doing things with purpose and curiosity.
          </p>
        </motion.div>
      </div>

      {/* CARDS SECTION */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  )
}
