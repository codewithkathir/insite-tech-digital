import { ShoppingCart, Building2, Stethoscope, Scale, Utensils, GraduationCap } from "lucide-react"

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-Commerce SEO",
    description:
      "Drive product visibility and sales with optimized category pages, product descriptions, and technical enhancements for online stores.",
    results: "Average 250% increase in organic revenue",
  },
  {
    icon: Building2,
    title: "B2B SEO",
    description:
      "Generate qualified leads through thought leadership content, industry-specific keywords, and targeted landing pages.",
    results: "Average 180% increase in lead generation",
  },
  {
    icon: Stethoscope,
    title: "Healthcare SEO",
    description:
      "Build trust and attract patients with HIPAA-compliant content strategies and local search optimization.",
    results: "Average 200% increase in appointment bookings",
  },
  {
    icon: Scale,
    title: "Legal SEO",
    description:
      "Establish authority and capture high-intent searches for law firms with practice area optimization.",
    results: "Average 300% increase in case inquiries",
  },
  {
    icon: Utensils,
    title: "Restaurant SEO",
    description:
      "Dominate local searches and drive foot traffic with Google Business optimization and local content.",
    results: "Average 150% increase in reservations",
  },
  {
    icon: GraduationCap,
    title: "Education SEO",
    description:
      "Increase enrollments and program visibility for educational institutions with targeted content strategies.",
    results: "Average 175% increase in applications",
  },
]

export function UseCasesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            SEO Solutions for Every Business
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We tailor our SEO strategies to meet the unique needs of different industries and
            business models.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6 inline-flex rounded-xl bg-[#ffc433]/20 p-4">
                <useCase.icon className="h-7 w-7 text-[#06807D]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{useCase.description}</p>
              <div className="inline-flex items-center rounded-full bg-[#06807D]/10 px-4 py-2 text-sm font-medium text-[#06807D]">
                {useCase.results}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
