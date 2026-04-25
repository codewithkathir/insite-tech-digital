import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses starting their SEO journey",
    price: "$1,500",
    period: "/month",
    features: [
      "Up to 20 target keywords",
      "Technical SEO audit",
      "On-page optimization",
      "Monthly reporting",
      "Basic link building",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "Ideal for growing businesses ready to scale",
    price: "$3,000",
    period: "/month",
    features: [
      "Up to 50 target keywords",
      "Comprehensive technical SEO",
      "Content strategy & creation",
      "Weekly reporting",
      "Advanced link building",
      "Dedicated account manager",
      "Competitor analysis",
      "Local SEO optimization",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: "Custom",
    period: "",
    features: [
      "Unlimited keywords",
      "Full technical overhaul",
      "Custom content strategy",
      "Real-time dashboard",
      "Premium link building",
      "Senior SEO strategist",
      "Multi-location SEO",
      "API integrations",
      "Priority support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Transparent SEO Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose a plan that fits your business needs. No hidden fees, no long-term contracts.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-[#06807D] text-white ring-4 ring-[#ffc433]"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#ffc433] text-gray-900 text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-xl font-semibold ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${plan.popular ? "text-white/80" : "text-gray-500"}`}
                >
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-white/80" : "text-gray-500"}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-1 ${
                        plan.popular ? "bg-[#ffc433]" : "bg-[#06807D]/10"
                      }`}
                    >
                      <Check
                        className={`h-4 w-4 ${
                          plan.popular ? "text-gray-900" : "text-[#06807D]"
                        }`}
                      />
                    </div>
                    <span className={plan.popular ? "text-white/90" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-[#ffc433] text-gray-900 hover:bg-[#e6b02e]"
                    : "bg-[#06807D] text-white hover:bg-[#056b68]"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12">
          All plans include a 30-day money-back guarantee. Need a custom solution?{" "}
          <a href="/contact" className="text-[#06807D] font-medium hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
  )
}
