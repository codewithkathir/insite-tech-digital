import Link from "next/link"
import { ArrowRight, Search, Code, FileText, Link2, MapPin, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Keyword Research & Strategy",
    description:
      "Identify high-value keywords your customers are searching for and develop a strategic plan to rank for them.",
    href: "/services/keyword-research",
  },
  {
    icon: Code,
    title: "Technical SEO",
    description:
      "Optimize your website's technical foundation including site speed, mobile responsiveness, and crawlability.",
    href: "/services/technical-seo",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description:
      "Optimize content, meta tags, headers, and internal linking structure for maximum search visibility.",
    href: "/services/on-page-seo",
  },
  {
    icon: Link2,
    title: "Link Building",
    description:
      "Build high-quality backlinks from authoritative websites to boost your domain authority and rankings.",
    href: "/services/link-building",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Dominate local search results and Google Maps to attract customers in your service area.",
    href: "/services/local-seo",
  },
  {
    icon: BarChart3,
    title: "SEO Analytics & Reporting",
    description:
      "Track your progress with detailed reports on rankings, traffic, conversions, and ROI.",
    href: "/services/seo-analytics",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Comprehensive SEO Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From technical optimization to content strategy, we offer a full suite of SEO services
            designed to improve your search rankings and drive business growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:border-[#06807D]/20"
            >
              <div className="mb-6 inline-flex rounded-xl bg-[#06807D]/10 p-4">
                <service.icon className="h-7 w-7 text-[#06807D]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#06807D] transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center text-[#06807D] font-medium">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
