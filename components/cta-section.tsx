"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#06807D] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 text-balance">
              Ready to Grow Your Brand Online?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              {"Let's turn your digital challenges into opportunities. Connect with our experts today and start your growth journey."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ffc433] text-[#06807D] hover:bg-[#ffc433]/90 gap-2 font-semibold shadow-lg">
                Get Started Now
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Schedule a Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
