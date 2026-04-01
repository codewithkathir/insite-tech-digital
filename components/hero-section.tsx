"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-32 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/50 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium"
            >
              <motion.span 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-accent rounded-full"
              />
              Insight-Driven Growth
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-balance">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block"
              >
                Reimagining Your{" "}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-primary font-semibold inline-block"
              >
                <motion.span
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="bg-gradient-to-r from-primary via-[#06807D] to-primary bg-[length:200%_100%] bg-clip-text"
                >
                  Digital Success
                </motion.span>
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              At Insight Tech Digital, we turn complex marketing challenges into meaningful 
              digital momentum. Helping brands move from being seen to being remembered.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shadow-lg shadow-primary/25">
                  Connect With Experts
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="gap-2 border-primary/30 text-primary hover:bg-primary/5">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-4 h-4" />
                  </motion.span>
                  Watch Our Story
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center gap-8 pt-8 border-t border-border"
            >
              {[
                { value: "99%", label: "Customer Satisfaction" },
                { value: "25+", label: "Successful Projects" },
                { value: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Main Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Growth Analytics</h3>
                    <motion.span 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded"
                    >
                      +150%
                    </motion.span>
                  </div>
                  
                  {/* Chart Visualization */}
                  <div className="h-48 flex items-end gap-2">
                    {[40, 55, 45, 65, 50, 80, 70, 95, 85, 100].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                        className="flex-1 bg-primary/10 rounded-t-md relative overflow-hidden"
                      >
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${height * 0.7}%` }}
                          transition={{ duration: 1, delay: 0.7 + i * 0.08, ease: "easeOut" }}
                          className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md"
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {[
                      { value: "9X", label: "Faster Growth" },
                      { value: "24h", label: "Support" },
                      { value: "100%", label: "Data-Driven" },
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        className="text-center"
                      >
                        <p className="text-lg font-semibold">{item.value}</p>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-12 top-1/4"
              >
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-card border border-border rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">SEO</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Rankings Up</p>
                      <p className="text-xs text-accent font-medium">+320% increase</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-8 bottom-1/4"
              >
                <motion.div
                  animate={{ y: [0, 6, 0], rotate: [0, -1, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-card border border-primary/20 rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-10 h-10 bg-accent rounded-full flex items-center justify-center"
                    >
                      <span className="text-accent-foreground font-semibold text-sm">AI</span>
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium">LLM Ready</p>
                      <p className="text-xs text-primary font-medium">Future-proof</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
