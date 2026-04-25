"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [progressWidths, setProgressWidths] = useState({ traffic: 0, keywords: 0, conversion: 0 })

  useEffect(() => {
    setIsVisible(true)
    // Animate progress bars after initial load
    const timer = setTimeout(() => {
      setProgressWidths({ traffic: 85, keywords: 92, conversion: 78 })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#06807D] to-[#045654] py-20 lg:py-28">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-20 20v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#ffc433]/20 blur-xl animate-[bounce_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-[bounce_8s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-[#ffc433]/10 blur-lg animate-[ping_4s_ease-in-out_infinite]" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white mb-6 animate-[fadeIn_0.8s_ease-out]">
              <span className="h-2 w-2 rounded-full bg-[#ffc433] animate-pulse" />
              #1 Rated SEO Agency
            </div>
            
            <h1 className={`text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Professional SEO Services That{" "}
              <span className="text-[#ffc433] inline-block animate-[pulse_3s_ease-in-out_infinite]">Drive Real Results</span>
            </h1>
            
            <p className={`mt-6 text-lg text-white/90 leading-relaxed max-w-xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transform your online visibility with data-driven SEO strategies. We help businesses
              rank higher, drive qualified traffic, and increase revenue through proven optimization techniques.
            </p>

            <div className={`mt-8 flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button size="lg" className="bg-[#ffc433] text-gray-900 hover:bg-[#e6b02e] font-semibold group hover:scale-105 transition-transform duration-300">
                Get Your Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#06807D] hover:scale-105 transition-all duration-300">
                View Case Studies
              </Button>
            </div>

            <div className={`mt-10 flex flex-wrap gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {["100+ Happy Clients", "500% Avg. ROI", "10+ Years Experience"].map((stat, index) => (
                <div 
                  key={stat} 
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                  style={{ animationDelay: `${800 + index * 150}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-[#ffc433] animate-[bounce_2s_ease-in-out_infinite]" style={{ animationDelay: `${index * 200}ms` }} />
                  <span className="text-sm font-medium">{stat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Organic Traffic Growth</span>
                  <span className="text-[#ffc433] font-bold animate-[pulse_2s_ease-in-out_infinite]">+287%</span>
                </div>
                <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                  <div 
                    className="h-2 rounded-full bg-[#ffc433] transition-all duration-1500 ease-out"
                    style={{ width: `${progressWidths.traffic}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Keyword Rankings</span>
                  <span className="text-[#ffc433] font-bold animate-[pulse_2s_ease-in-out_infinite_0.5s]">Top 10</span>
                </div>
                <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                  <div 
                    className="h-2 rounded-full bg-[#ffc433] transition-all duration-1500 ease-out delay-200"
                    style={{ width: `${progressWidths.keywords}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Conversion Rate</span>
                  <span className="text-[#ffc433] font-bold animate-[pulse_2s_ease-in-out_infinite_1s]">+156%</span>
                </div>
                <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                  <div 
                    className="h-2 rounded-full bg-[#ffc433] transition-all duration-1500 ease-out delay-400"
                    style={{ width: `${progressWidths.conversion}%` }}
                  />
                </div>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-center text-white text-sm">Average results for our clients in 6 months</p>
                </div>
              </div>

              {/* Animated corner accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#ffc433] rounded-tl-lg animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#ffc433] rounded-tr-lg animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#ffc433] rounded-bl-lg animate-pulse" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#ffc433] rounded-br-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
