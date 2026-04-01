"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechVenture Inc.",
    image: "SM",
    rating: 5,
    text: "Insight Tech Digital transformed our online presence completely. Their data-driven approach to SEO increased our organic traffic by 340% in just 6 months. The team truly understands how to turn insights into measurable results.",
    metric: "340%",
    metricLabel: "Traffic Increase"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GlobalRetail Co.",
    image: "MC",
    rating: 5,
    text: "Working with ITD was a game-changer for our e-commerce business. Their PPC campaigns delivered an incredible ROAS, and their strategic insights helped us identify untapped market segments we never knew existed.",
    metric: "5.2x",
    metricLabel: "Return on Ad Spend"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "HealthTech Solutions",
    image: "ER",
    rating: 5,
    text: "The team at Insight Tech Digital doesn't just execute campaigns — they become true partners in your growth. Their LLM optimization strategies positioned us as the go-to resource in AI-powered health searches.",
    metric: "#1",
    metricLabel: "AI Search Rankings"
  },
  {
    id: 4,
    name: "David Park",
    role: "VP of Growth",
    company: "FinServe Group",
    image: "DP",
    rating: 5,
    text: "From strategy to execution, ITD exceeded every expectation. Their content marketing approach generated qualified leads that converted at 3x our previous rate. Truly insight-driven excellence.",
    metric: "3x",
    metricLabel: "Conversion Rate"
  }
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            {"Don't just take our word for it. Here's what our clients say about working with Insight Tech Digital."}
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-5 gap-8 items-center"
              >
                {/* Left: Quote & Content */}
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#ffc433] text-[#ffc433]" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-xl md:text-2xl font-serif leading-relaxed text-foreground">
                    {`"${testimonials[current].text}"`}
                  </blockquote>

                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-lg">
                        {testimonials[current].image}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonials[current].name}</p>
                      <p className="text-muted-foreground">
                        {testimonials[current].role}, {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Metric Card */}
                <div className="lg:col-span-2">
                  <div className="bg-[#06807D] rounded-2xl p-8 text-center text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-6">
                      <Quote className="w-8 h-8 text-[#ffc433]" />
                    </div>
                    <p className="text-5xl md:text-6xl font-bold text-[#ffc433] mb-2">
                      {testimonials[current].metric}
                    </p>
                    <p className="text-white/80 font-medium">
                      {testimonials[current].metricLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrent(index)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current 
                        ? "w-8 bg-primary" 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: "50+", label: "Happy Clients" },
            { value: "99%", label: "Satisfaction Rate" },
            { value: "4.9", label: "Average Rating" },
            { value: "100%", label: "Would Recommend" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card border border-border rounded-xl">
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
