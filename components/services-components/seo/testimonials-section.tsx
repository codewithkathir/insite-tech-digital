import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Insight Tech Digital transformed our online presence. We went from page 5 to position 1 for our main keywords within 6 months. Our organic traffic increased by 340%!",
    author: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    rating: 5,
    metric: "+340% Traffic",
  },
  {
    quote:
      "The team's expertise in technical SEO fixed issues we didn't even know we had. Our site speed improved dramatically, and so did our conversions.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    rating: 5,
    metric: "+200% Conversions",
  },
  {
    quote:
      "Professional, transparent, and results-driven. They don't just promise results—they deliver them with detailed monthly reports showing clear ROI.",
    author: "Emily Rodriguez",
    role: "Founder, LocalBiz Pro",
    rating: 5,
    metric: "5x ROI",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don&apos;t just take our word for it—hear from businesses that have achieved real results
            with our SEO services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-[#06807D] rounded-lg p-2">
                  <Quote className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#ffc433] text-[#ffc433]" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className="bg-[#ffc433]/20 text-[#06807D] px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#06807D]">100+</div>
            <div className="text-sm">Happy Clients</div>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div className="text-center">
            <div className="text-3xl font-bold text-[#06807D]">4.9/5</div>
            <div className="text-sm">Average Rating</div>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div className="text-center">
            <div className="text-3xl font-bold text-[#06807D]">500%</div>
            <div className="text-sm">Avg. ROI</div>
          </div>
          <div className="h-12 w-px bg-gray-200" />
          <div className="text-center">
            <div className="text-3xl font-bold text-[#06807D]">10+</div>
            <div className="text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
