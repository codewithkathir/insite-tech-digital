"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy, and results typically begin to appear within 3-6 months. However, this timeline can vary depending on factors like your website's current state, industry competition, and the keywords you're targeting. Some improvements, like technical fixes, can show results faster, while building domain authority takes more time.",
  },
  {
    question: "What's the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO refers to optimizations made directly on your website, including content, meta tags, headers, and internal linking. Off-page SEO involves activities outside your website that impact rankings, primarily link building and brand mentions. Both are essential for a comprehensive SEO strategy.",
  },
  {
    question: "Do you guarantee first-page rankings?",
    answer:
      "We don't guarantee specific rankings because no legitimate SEO agency can—search algorithms are constantly evolving and outside anyone's direct control. What we do guarantee is implementing proven strategies, transparent reporting, and continuous optimization to improve your search visibility and drive measurable results.",
  },
  {
    question: "How do you measure SEO success?",
    answer:
      "We track multiple metrics including organic traffic growth, keyword rankings, conversion rates, bounce rates, time on site, and most importantly, ROI. You'll receive detailed monthly reports with clear explanations of progress and next steps.",
  },
  {
    question: "What makes your SEO services different from other agencies?",
    answer:
      "We focus on data-driven strategies, transparent communication, and measurable results. Unlike many agencies, we don't use black-hat techniques that risk penalties. We provide dedicated account managers, real-time dashboard access, and no long-term contracts—we earn your business every month.",
  },
  {
    question: "Do you offer local SEO services?",
    answer:
      "Yes! Local SEO is one of our specialties. We help businesses optimize their Google Business Profile, build local citations, manage reviews, and create geo-targeted content to dominate local search results and Google Maps.",
  },
  {
    question: "How much do SEO services cost?",
    answer:
      "Our SEO packages start at $1,500/month for small businesses and scale based on your needs and competition level. We offer flexible plans with no long-term contracts. Contact us for a custom quote based on your specific goals and requirements.",
  },
  {
    question: "Can I do SEO myself instead of hiring an agency?",
    answer:
      "While basic SEO can be learned, effective SEO requires significant time, expertise, and access to professional tools. Most businesses find that the ROI from professional SEO services far exceeds the investment, allowing them to focus on running their business while we handle their search visibility.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our SEO services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
