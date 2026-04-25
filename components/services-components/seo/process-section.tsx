import { Search, FileSearch, Wrench, BarChart, RefreshCw } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery & Audit",
    description:
      "We begin with a comprehensive analysis of your current website, competitors, and industry to identify opportunities and gaps.",
  },
  {
    icon: FileSearch,
    title: "Strategy Development",
    description:
      "Based on our findings, we create a customized SEO strategy with clear goals, timelines, and KPIs tailored to your business.",
  },
  {
    icon: Wrench,
    title: "Technical Optimization",
    description:
      "We fix technical issues, improve site speed, enhance mobile experience, and ensure search engines can crawl your site effectively.",
  },
  {
    icon: BarChart,
    title: "Content & On-Page SEO",
    description:
      "Optimize existing content and create new, keyword-targeted content that ranks well and engages your audience.",
  },
  {
    icon: RefreshCw,
    title: "Monitor & Iterate",
    description:
      "Continuously track performance, analyze data, and refine strategies to ensure sustained growth and improved rankings.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-[#06807D]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Proven SEO Process</h2>
          <p className="mt-4 text-lg text-white/80">
            A systematic approach that delivers consistent results for businesses of all sizes.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
                  index !== steps.length - 1 ? "lg:pb-16" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ffc433] hidden lg:block" />

                <div
                  className={`${
                    index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"
                  }`}
                >
                  <div
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 ${
                      index % 2 === 0 ? "" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="inline-flex rounded-xl bg-[#ffc433] p-3">
                        <step.icon className="h-6 w-6 text-gray-900" />
                      </div>
                      <span className="text-[#ffc433] font-bold text-sm">
                        Step {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
