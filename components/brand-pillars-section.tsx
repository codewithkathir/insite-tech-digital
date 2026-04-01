"use client"

import { motion } from "framer-motion"
import { Lightbulb, Cpu, Globe, ArrowRight } from "lucide-react"

const pillars = [
  {
    word: "INSIGHT",
    icon: Lightbulb,
    tagline: "We gather insights that guide smart decisions.",
    description: "We decode data to reveal what matters — your opportunities, gaps, and next best moves.",
    color: "#06807D",
  },
  {
    word: "TECH",
    icon: Cpu,
    tagline: "We integrate the tech that powers your digital ecosystem.",
    description: "Automation, AI, analytics, and high-performing websites — everything runs smoother, faster, and smarter.",
    color: "#ffc433",
  },
  {
    word: "DIGITAL",
    icon: Globe,
    tagline: "We convert strategy into digital success.",
    description: "SEO, Ads, Social, Email, Content, and Website UX — we improve your visibility and turn traffic into growth.",
    color: "#06807D",
  },
]

export function BrandPillarsSection() {
  return (
    <section className="py-24 bg-[#06807D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#ffc433]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-white"
            >
              Insight
            </motion.span>
            <span className="w-2 h-2 md:w-3 md:h-3 bg-[#ffc433] rounded-full" />
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#ffc433]"
            >
              Tech
            </motion.span>
            <span className="w-2 h-2 md:w-3 md:h-3 bg-[#ffc433] rounded-full" />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif text-white"
            >
              Digital
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-white/80 text-lg md:text-xl mb-2"
          >
            Serious results. Not-so-serious attitude.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-[#ffc433] font-medium text-sm md:text-base tracking-wide"
          >
            Three essentials. One growth engine.
          </motion.p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300">
                {/* Icon & Word */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: pillar.color === "#ffc433" ? "#ffc433" : "rgba(255,255,255,0.2)" }}
                  >
                    <pillar.icon 
                      className="w-7 h-7" 
                      style={{ color: pillar.color === "#ffc433" ? "#06807D" : "#ffc433" }}
                    />
                  </div>
                  <h3 
                    className="text-2xl md:text-3xl font-bold tracking-wider"
                    style={{ color: pillar.color === "#ffc433" ? "#ffc433" : "white" }}
                  >
                    {pillar.word}
                  </h3>
                </div>

                {/* Tagline */}
                <p className="text-white font-medium text-lg mb-3">
                  {pillar.tagline}
                </p>

                {/* Description */}
                <p className="text-white/70 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Decorative Line */}
                <div 
                  className="absolute bottom-0 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: pillar.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Arrows (Desktop) */}
        <div className="hidden md:flex items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-white/60">
            <span className="text-sm">Insight</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm">drives</span>
          </div>
          <div className="flex items-center gap-2 text-[#ffc433]">
            <span className="text-sm font-medium">Tech</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm">powers</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <span className="text-sm">Digital</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-sm">delivers</span>
          </div>
          <span className="text-[#ffc433] font-medium text-sm">Results</span>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto"
        >
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            <span className="text-[#ffc433] font-semibold">Insight Tech Digital</span> = A single system where{" "}
            <span className="text-white font-medium">insights drive tech</span>, tech powers your website, and{" "}
            <span className="text-white font-medium">digital channels deliver measurable results</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
