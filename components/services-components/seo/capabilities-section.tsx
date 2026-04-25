import { CheckCircle, Code, FileText, Link2, MapPin, BarChart3 } from "lucide-react"

const capabilities = [
  {
    icon: Code,
    title: "Technical SEO Expertise",
    description: "We optimize your website's foundation to ensure search engines can crawl, index, and understand your content efficiently. From Core Web Vitals to schema markup, we handle the technical complexities.",
    items: [
      "Site architecture optimization",
      "Core Web Vitals improvement",
      "Mobile-first optimization",
      "Schema markup implementation",
    ],
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Our content strategies are built on data-driven keyword research and user intent analysis. We create content that ranks, engages, and converts your target audience into customers.",
    items: [
      "Keyword gap analysis",
      "Topic cluster strategy",
      "Featured snippet optimization",
      "E-E-A-T improvement",
    ],
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "We build high-quality, relevant backlinks through ethical outreach and digital PR campaigns. Our approach focuses on earning links that drive both authority and referral traffic.",
    items: [
      "Digital PR campaigns",
      "Guest posting outreach",
      "Broken link building",
      "Competitor backlink analysis",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Dominate local search results and attract customers in your service area. We optimize your Google Business Profile and build local citations to increase visibility in your community.",
    items: [
      "Google Business Profile optimization",
      "Local keyword targeting",
      "Citation management",
      "Review generation strategy",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Transparent reporting and actionable insights keep you informed on progress. We track every metric that matters and provide clear recommendations for continuous improvement.",
    items: [
      "Google Analytics 4 setup",
      "Custom dashboard creation",
      "Conversion tracking",
      "ROI reporting",
    ],
  },
]

export function CapabilitiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our SEO Capabilities</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the depth of our expertise across all areas of search engine optimization.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#06807D]/10">
                <capability.icon className="h-7 w-7 text-[#06807D]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{capability.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{capability.description}</p>
              <ul className="mt-6 space-y-3">
                {capability.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ffc433] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
