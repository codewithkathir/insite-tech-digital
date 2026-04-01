"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function MiddleCTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06807D] via-[#06807D] to-[#058a87]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#ffc433]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -left-10 w-32 h-32 border border-[#ffc433]/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffc433]/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#ffc433]" />
              <span className="text-sm font-medium text-[#ffc433]">Ready to Transform?</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 text-balance">
              Make Your Brand Stand Out,{" "}
              <span className="text-[#ffc433]">Starting Today.</span>
            </h2>
            
            <p className="text-white/80 text-lg max-w-xl">
              {"Don't let your competitors get ahead. Let's create a digital strategy that drives real results and sets your brand apart."}
            </p>
          </div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-[#ffc433] text-[#06807D] hover:bg-[#ffc433]/90 gap-2 font-semibold shadow-lg shadow-black/20 px-8"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-16"
        >
          <div className="text-center lg:text-left">
            <p className="text-2xl font-semibold text-[#ffc433]">Free</p>
            <p className="text-white/60 text-sm">Initial Consultation</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-2xl font-semibold text-white">48hrs</p>
            <p className="text-white/60 text-sm">Strategy Delivery</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-2xl font-semibold text-white">100%</p>
            <p className="text-white/60 text-sm">Satisfaction Guaranteed</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
