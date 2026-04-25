import { Search, TrendingUp, Target, Globe } from "lucide-react"

export function DefinitionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-balance">
              What is SEO and Why Does Your Business Need It?
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Search Engine Optimization (SEO) is the practice of optimizing your website to increase
              its visibility in search engine results pages (SERPs). When potential customers search
              for products or services you offer, SEO helps ensure they find your business first.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              In today&apos;s digital landscape, 93% of online experiences begin with a search engine.
              Without proper SEO, you&apos;re invisible to the vast majority of your potential customers.
              Our comprehensive SEO services help you capture this traffic and convert visitors into
              loyal customers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Search,
                title: "Visibility",
                description: "Get found when customers search for your services",
              },
              {
                icon: TrendingUp,
                title: "Traffic",
                description: "Drive qualified organic visitors to your website",
              },
              {
                icon: Target,
                title: "Conversions",
                description: "Turn website visitors into paying customers",
              },
              {
                icon: Globe,
                title: "Authority",
                description: "Build trust and credibility in your industry",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-[#06807D]/20 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#06807D]/10 p-3">
                  <item.icon className="h-6 w-6 text-[#06807D]" />
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
