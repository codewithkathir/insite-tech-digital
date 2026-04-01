"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Code, Rocket, LineChart, RefreshCw } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Research",
    description: "Deep dive into your business, market, and competitors to uncover opportunities.",
    details: ["Market Analysis", "Competitor Audit", "User Research"],
    color: "#06807D"
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Craft data-driven strategies aligned with your goals and target audience.",
    details: ["Goal Setting", "Channel Strategy", "Content Planning"],
    color: "#ffc433"
  },
  {
    number: "03",
    icon: Code,
    title: "Design & Development",
    description: "Build high-performing digital assets that convert visitors into customers.",
    details: ["UX Design", "Development", "Integration"],
    color: "#06807D"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Execute",
    description: "Deploy campaigns and digital solutions with precision and attention to detail.",
    details: ["Campaign Launch", "Quality Assurance", "Go-Live Support"],
    color: "#ffc433"
  },
  {
    number: "05",
    icon: LineChart,
    title: "Monitor & Analyze",
    description: "Track performance metrics and gather insights to measure success.",
    details: ["Analytics Setup", "KPI Tracking", "Reporting"],
    color: "#06807D"
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Optimize & Scale",
    description: "Continuously improve based on data to maximize ROI and scale growth.",
    details: ["A/B Testing", "Optimization", "Scaling"],
    color: "#ffc433"
  }
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">How We Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-balance">
            Our Proven 6-Step Process
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic approach that transforms your digital challenges into measurable growth opportunities.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Timeline Node - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"}`}>
                  <div className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                    {/* Mobile Number Badge */}
                    <div className="lg:hidden flex items-center gap-4 mb-6">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: step.color }}
                      >
                        <span className="text-white font-bold">{step.number}</span>
                      </div>
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <step.icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                    </div>

                    {/* Desktop Icon */}
                    <div className={`hidden lg:flex items-center gap-4 mb-6 ${index % 2 === 0 ? "justify-end" : ""}`}>
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <step.icon className="w-7 h-7" style={{ color: step.color }} />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Detail Tags */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      {step.details.map((detail, i) => (
                        <span 
                          key={i}
                          className="text-xs font-medium px-3 py-1.5 rounded-full"
                          style={{ 
                            backgroundColor: `${step.color}10`,
                            color: step.color
                          }}
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Column for Alternating Layout */}
                {index % 2 === 0 && <div className="hidden lg:block" />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 bg-[#06807D] text-white px-8 py-4 rounded-full">
            <span className="font-medium">Ready to start your growth journey?</span>
            <span className="w-8 h-8 bg-[#ffc433] rounded-full flex items-center justify-center">
              <Rocket className="w-4 h-4 text-[#06807D]" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
