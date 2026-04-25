import Link from "next/link"
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    title: "TechStart Solutions",
    industry: "SaaS Technology",
    challenge:
      "Low organic visibility and heavy reliance on paid advertising for lead generation.",
    results: [
      { label: "Organic Traffic", value: "+340%", icon: TrendingUp },
      { label: "Qualified Leads", value: "+250%", icon: Users },
      { label: "Keyword Rankings", value: "150+ Top 10", icon: Target },
    ],
    timeline: "8 months",
  },
  {
    title: "HealthFirst Clinic",
    industry: "Healthcare",
    challenge:
      "Struggling to attract local patients in a competitive metropolitan healthcare market.",
    results: [
      { label: "Local Traffic", value: "+280%", icon: TrendingUp },
      { label: "Appointment Bookings", value: "+200%", icon: Users },
      { label: "Google Maps Rankings", value: "#1 Position", icon: Target },
    ],
    timeline: "6 months",
  },
  {
    title: "LegalEdge Partners",
    industry: "Legal Services",
    challenge:
      "Needed to establish online authority and capture high-value case inquiries organically.",
    results: [
      { label: "Organic Traffic", value: "+420%", icon: TrendingUp },
      { label: "Case Inquiries", value: "+300%", icon: Users },
      { label: "Domain Authority", value: "45 → 62", icon: Target },
    ],
    timeline: "10 months",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-[#06807D]/5">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Real Results from Real Clients
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore how we&apos;ve helped businesses achieve measurable growth through strategic SEO.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-[#06807D] bg-[#06807D]/10 px-3 py-1 rounded-full">
                  {study.industry}
                </span>
                <span className="text-sm text-gray-500">{study.timeline}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{study.challenge}</p>

              <div className="space-y-4">
                {study.results.map((result) => (
                  <div
                    key={result.label}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <result.icon className="h-5 w-5 text-[#06807D]" />
                      <span className="text-sm text-gray-600">{result.label}</span>
                    </div>
                    <span className="font-semibold text-[#06807D]">{result.value}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-6 flex items-center text-[#06807D] font-medium hover:underline"
              >
                Read full case study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-[#06807D] hover:bg-[#056b68] text-white">
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
