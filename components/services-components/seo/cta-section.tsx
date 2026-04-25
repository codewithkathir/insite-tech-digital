import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#06807D] to-[#045654]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            Ready to Grow Your Business with SEO?
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Get a free SEO audit and discover how we can help you rank higher, drive more traffic,
            and increase your revenue. No commitment required.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#ffc433] text-gray-900 hover:bg-[#e6b02e] font-semibold"
            >
              Get Your Free SEO Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#06807D]"
            >
              Schedule a Call
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-5 w-5" />
              +1 (234) 567-890
            </a>
            <a
              href="mailto:info@insighttechdigital.com"
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-5 w-5" />
              info@insighttechdigital.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
