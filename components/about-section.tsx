"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, TrendingUp, Award, Users, Zap } from "lucide-react"

const stats = [
  { value: "99%", label: "Client Satisfaction" },
  { value: "25+", label: "Successful Projects" },
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Team Experts" },
]

const values = [
  {
    icon: Lightbulb,
    title: "Insight-Driven",
    description: "Every strategy backed by deep market research and data analytics.",
  },
  {
    icon: Target,
    title: "Purpose-Focused",
    description: "Actions aligned precisely with your unique business objectives.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Oriented",
    description: "Measurable results that scale with your business ambitions.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Who We Are</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-balance">
            Your Partners in <span className="text-primary">Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Born from a passion for purposeful marketing, Insight Tech Digital transforms 
            how brands connect, engage, and grow in the digital landscape.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-semibold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Vision & Mission - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the trusted digital partner that helps every business grow with purpose, 
                guided purely by insight and built on measurable success.
              </p>
            </div>

            <div className="bg-[#06807D] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#ffc433]/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#ffc433]" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To redefine digital marketing through insight-driven strategies that inspire 
                connection, drive performance, and deliver lasting impact.
              </p>
            </div>
          </motion.div>

          {/* Core Values - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-background to-secondary border border-border rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">What Drives Us</h3>
              </div>
              
              <div className="space-y-8">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  {`"We don't just deliver services — we become an extension of your team, 
                  invested in your success as much as you are."`}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
