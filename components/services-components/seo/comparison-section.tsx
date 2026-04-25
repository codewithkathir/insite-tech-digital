import { Check, X } from "lucide-react"

const comparisons = [
  {
    feature: "Data-Driven Strategy",
    us: true,
    others: false,
  },
  {
    feature: "Dedicated Account Manager",
    us: true,
    others: false,
  },
  {
    feature: "Transparent Reporting",
    us: true,
    others: false,
  },
  {
    feature: "Custom Solutions",
    us: true,
    others: false,
  },
  {
    feature: "No Long-Term Contracts",
    us: true,
    others: false,
  },
  {
    feature: "White-Hat Techniques Only",
    us: true,
    others: false,
  },
  {
    feature: "Real-Time Dashboard Access",
    us: true,
    others: false,
  },
  {
    feature: "Money-Back Guarantee",
    us: true,
    others: false,
  },
]

export function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Insight Tech Digital?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how we compare to other SEO agencies and why businesses trust us with their
            digital growth.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-4 font-semibold text-gray-900">Feature</div>
              <div className="p-4 font-semibold text-center bg-[#06807D] text-white">
                Insight Tech Digital
              </div>
              <div className="p-4 font-semibold text-center text-gray-500">Other Agencies</div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 ${
                  index !== comparisons.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="p-4 text-gray-700">{item.feature}</div>
                <div className="p-4 flex justify-center bg-[#06807D]/5">
                  {item.us ? (
                    <div className="rounded-full bg-[#06807D] p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  ) : (
                    <div className="rounded-full bg-gray-200 p-1">
                      <X className="h-4 w-4 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-4 flex justify-center">
                  {item.others ? (
                    <div className="rounded-full bg-green-500 p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  ) : (
                    <div className="rounded-full bg-gray-200 p-1">
                      <X className="h-4 w-4 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
