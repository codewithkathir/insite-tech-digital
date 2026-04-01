"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, MessageCircleQuestion, Sparkles, Users, Clock, Award } from "lucide-react"

const faqs = [
  {
    question: "What digital marketing services does Insight Tech Digital offer?",
    answer: "We offer comprehensive digital marketing solutions including SEO, PPC advertising, social media marketing, content marketing, email marketing, and cutting-edge LLM optimization for AI platforms.",
    icon: Sparkles
  },
  {
    question: "What is LLM Optimization, and why is it important for my brand?",
    answer: "LLM Optimization ensures your brand is visible on AI-driven platforms like ChatGPT, Perplexity, and Gemini. As more users turn to AI for search, being optimized for these platforms is crucial for future-proofing your digital presence.",
    icon: MessageCircleQuestion
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes! We work with startups, enterprises, B2B companies, and agencies. Our strategies are tailored to meet the unique challenges and goals of businesses at every stage of growth.",
    icon: Users
  },
  {
    question: "How soon can I expect results from digital marketing?",
    answer: "Results vary by service. PPC can deliver immediate traffic, while SEO typically shows significant improvements within 3-6 months. We focus on sustainable, long-term growth while also pursuing quick wins where possible.",
    icon: Clock
  },
  {
    question: "Why choose Insight Tech Digital?",
    answer: "With 5+ years of experience, 99% customer satisfaction, and a data-driven approach, we deliver measurable results. Our team combines creativity, technology, and deep market insights to create strategies that truly work.",
    icon: Award
  },
  {
    question: "What makes your approach different from other agencies?",
    answer: "We believe in insight-driven strategies over generic solutions. Every decision is backed by data, and we focus on building lasting partnerships rather than one-time projects. Our transparent process ensures you're always informed and in control.",
    icon: Sparkles
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <MessageCircleQuestion className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Got Questions?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-balance leading-tight">
              Everything You Need to{" "}
              <span className="text-primary">Know</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Find quick answers about our digital marketing, AI readiness, and LLM optimization services.
            </p>

            {/* Stats mini cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-2xl font-bold text-primary">6+</p>
                <p className="text-sm text-muted-foreground">Core Services</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-2xl font-bold text-[#ffc433]">24/7</p>
                <p className="text-sm text-muted-foreground">Support Ready</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const Icon = faq.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`
                    bg-card border rounded-2xl overflow-hidden transition-all duration-300
                    ${isOpen 
                      ? "border-primary shadow-lg shadow-primary/10" 
                      : "border-border hover:border-primary/30 hover:shadow-md"
                    }
                  `}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start gap-4 p-6 text-left"
                  >
                    <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors
                      ${isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary"}
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className={`font-semibold text-base leading-snug transition-colors ${isOpen ? "text-primary" : ""}`}>
                          {faq.question}
                        </h3>
                        <div className={`
                          w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all
                          ${isOpen 
                            ? "bg-[#ffc433] text-[#06807D] rotate-0" 
                            : "bg-muted text-muted-foreground"
                          }
                        `}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pl-20">
                          <div className="h-px bg-border mb-4" />
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
