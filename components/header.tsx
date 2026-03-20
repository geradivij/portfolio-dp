"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-primary">Divij</span> Gera
          </div>

          <nav className="hidden items-center space-x-2 rounded-full border bg-background/75 px-3 py-2 md:flex">
            <button
              onClick={() => scrollToSection("about")}
              className="rounded-full px-4 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="rounded-full px-4 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-full px-4 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="rounded-full px-4 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-4 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 border-t pb-4 md:hidden">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left transition-colors hover:text-primary"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left transition-colors hover:text-primary"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left transition-colors hover:text-primary"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left transition-colors hover:text-primary"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left transition-colors hover:text-primary"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
