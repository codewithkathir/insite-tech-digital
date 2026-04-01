"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Insight Tech Digital"
              width={180}
              height={48}
              className="h-10 w-auto"
              priority
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              About
            </Link>
            <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Services
            </Link>
            <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Process
            </Link>
            <Link href="#team" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Team
            </Link>
            <Link href="#blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Insights
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                About
              </Link>
              <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Services
              </Link>
              <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Process
              </Link>
              <Link href="#team" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Team
              </Link>
              <Link href="#blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Insights
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm w-full mt-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
