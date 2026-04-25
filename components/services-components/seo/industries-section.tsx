import Link from "next/link"
import { 
  ArrowRight, 
  Monitor, 
  Stethoscope, 
  Landmark, 
  Home, 
  ShoppingCart, 
  Scale, 
  Factory, 
  Briefcase,
  type LucideIcon
} from "lucide-react"

interface Industry {
  name: string
  description: string
  count: string
  icon: LucideIcon
}

const industries: Industry[] = [
  {
    name: "Technology",
    description: "We help SaaS companies, tech startups, and software providers rank for competitive keywords and drive qualified demo requests.",
    count: "50+ clients",
    icon: Monitor,
  },
  {
    name: "Healthcare",
    description: "HIPAA-compliant SEO strategies that build trust and attract patients searching for medical services in your area.",
    count: "35+ clients",
    icon: Stethoscope,
  },
  {
    name: "Finance",
    description: "Establish authority in the financial services space with content that meets E-E-A-T standards and converts high-value leads.",
    count: "40+ clients",
    icon: Landmark,
  },
  {
    name: "Real Estate",
    description: "Dominate local real estate searches and generate consistent leads from buyers and sellers in your target markets.",
    count: "30+ clients",
    icon: Home,
  },
  {
    name: "E-Commerce",
    description: "Drive product page rankings and shopping intent traffic that converts into sales and repeat customers.",
    count: "60+ clients",
    icon: ShoppingCart,
  },
  {
    name: "Legal",
    description: "Compete in high-value legal markets with ethical link building and content strategies that attract case inquiries.",
    count: "25+ clients",
    icon: Scale,
  },
  {
    name: "Manufacturing",
    description: "B2B SEO strategies that target decision-makers and generate RFQs from qualified industrial buyers.",
    count: "20+ clients",
    icon: Factory,
  },
  {
    name: "Professional Services",
    description: "Position your firm as the go-to expert in your field with thought leadership content that ranks and converts.",
    count: "45+ clients",
    icon: Briefcase,
  },
]

export function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Industries We Serve</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            With over a decade of experience, we&apos;ve successfully helped businesses across
            virtually every industry improve their search visibility and drive growth. Our team
            understands the unique challenges and opportunities in each sector.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.name}
                className="group rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#06807D] hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#06807D]/10 flex items-center justify-center group-hover:bg-[#06807D] transition-colors">
                    <Icon className="h-6 w-6 text-[#06807D] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{industry.name}</h3>
                    <span className="text-xs font-medium text-[#06807D]">
                      {industry.count}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[#06807D] font-semibold hover:underline"
          >
            See all industries we serve
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
