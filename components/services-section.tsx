"use client"

import { motion } from "framer-motion"
import { Search, MousePointerClick, Share2, FileText, Mail, Bot, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Enhance your online visibility and rank higher with proven SEO strategies that drive organic growth.",
    tag: "SEO"
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click Advertising",
    description: "Drive instant, high-quality traffic with targeted ad campaigns that maximize your ROI.",
    tag: "PPC"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strengthen your brand presence and connect authentically with your audience across platforms.",
    tag: "SMM"
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Create powerful content that builds trust, educates your audience, and converts visitors.",
    tag: "Content"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Engage and retain customers with data-driven, personalized email campaigns.",
    tag: "Email"
  },
  {
    icon: Bot,
    title: "LLM Optimization",
    description: "Optimize your brand for AI platforms like ChatGPT, Perplexity, and Gemini for the new era of search.",
    tag: "AI Ready"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-balance">
            Comprehensive Digital Marketing Solutions
          </h2>
          <p className="text-muted-foreground">
            Tailored strategies to boost visibility, engagement, and conversions across all digital channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              
              <button className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 gap-1 transition-all group-hover:text-accent">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
