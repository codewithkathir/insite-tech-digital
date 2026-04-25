import { TrendingUp, DollarSign, Users, Clock, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Organic Traffic",
    description: "Drive more qualified visitors to your website without the ongoing costs of paid advertising. Our strategies focus on sustainable traffic growth that compounds over time, giving you a steady stream of potential customers actively searching for your services.",
  },
  {
    icon: DollarSign,
    title: "Higher ROI",
    description: "SEO delivers one of the highest returns on investment of any digital marketing channel. Unlike paid campaigns that stop the moment you pause spending, SEO builds lasting equity in your online presence that continues to generate leads for years.",
  },
  {
    icon: Users,
    title: "Better Quality Leads",
    description: "Attract visitors who are actively searching for your products or services at the exact moment they need them. These high-intent users convert at significantly higher rates than cold traffic from other marketing channels.",
  },
  {
    icon: Clock,
    title: "Long-Term Results",
    description: "While paid advertising stops working the moment you stop paying, SEO benefits compound over time. The content and authority you build today continues to drive traffic and leads for months and years into the future.",
  },
  {
    icon: Shield,
    title: "Brand Credibility",
    description: "Users inherently trust organic search results more than paid advertisements. Ranking on the first page of Google positions your brand as an industry authority and builds instant credibility with potential customers.",
  },
  {
    icon: Zap,
    title: "Competitive Advantage",
    description: "In most industries, the majority of clicks go to the top 3 search results. By outranking your competitors, you capture market share and establish your business as the go-to solution in your niche.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Benefits of Professional SEO Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Investing in SEO isn&apos;t just about rankings—it&apos;s about building a sustainable
            foundation for long-term business growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex gap-6 p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06807D]">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-[#ffc433]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-lg">{benefit.title}</h3>
                </div>
                <p className="mt-3 text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
