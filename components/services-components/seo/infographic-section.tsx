import { Search, TrendingUp, DollarSign, Target, Users, Award } from "lucide-react"

export function InfographicSection() {
  return (
    <section className="py-20 bg-[#06807D]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">SEO by the Numbers</h2>
          <p className="mt-4 text-lg text-white/80">
            The impact of professional SEO services on business growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Search,
              stat: "93%",
              label: "Online Experiences",
              description: "Start with a search engine",
            },
            {
              icon: TrendingUp,
              stat: "70%",
              label: "Of Clicks",
              description: "Go to the first 5 organic results",
            },
            {
              icon: DollarSign,
              stat: "14.6%",
              label: "Close Rate",
              description: "For SEO leads vs 1.7% for outbound",
            },
            {
              icon: Target,
              stat: "61%",
              label: "Of Marketers",
              description: "Say SEO is their top priority",
            },
            {
              icon: Users,
              stat: "53%",
              label: "Of Website Traffic",
              description: "Comes from organic search",
            },
            {
              icon: Award,
              stat: "5.66x",
              label: "Average ROI",
              description: "Return on SEO investment",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[#ffc433] p-3">
                <item.icon className="h-6 w-6 text-gray-900" />
              </div>
              <div className="text-4xl font-bold text-[#ffc433] mb-2">{item.stat}</div>
              <div className="text-white font-semibold mb-1">{item.label}</div>
              <div className="text-white/70 text-sm">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
