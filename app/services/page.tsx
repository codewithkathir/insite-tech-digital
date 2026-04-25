import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ArrowRight, Search, Code, TrendingUp, PenTool, Users, Target, Zap } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "SEO Services",
    description: "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
    features: ["Keyword Research", "On-Page Optimization", "Link Building", "Technical SEO"],
    href: "/services/seo",
    color: "text-blue-600"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build responsive, fast, and secure websites that convert visitors into customers.",
    features: ["Custom Websites", "E-commerce Solutions", "Web Applications", "Maintenance"],
    href: "/services/web-development",
    color: "text-green-600"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Reach your target audience and grow your business with comprehensive digital marketing.",
    features: ["PPC Advertising", "Social Media Marketing", "Email Marketing", "Analytics"],
    href: "/services/digital-marketing",
    color: "text-purple-600"
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Create engaging content that attracts, educates, and converts your audience.",
    features: ["Content Strategy", "Blog Writing", "Copywriting", "Content Distribution"],
    href: "/services/content-marketing",
    color: "text-orange-600"
  }
]

const benefits = [
  "Expert team with 10+ years experience",
  "Proven track record of success",
  "Customized strategies for your business",
  "Transparent reporting and communication",
  "Affordable pricing packages",
  "24/7 customer support"
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#06807D] to-[#056b68] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Digital Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Transform your business with our comprehensive digital solutions
              </p>
              <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto">
                From SEO to web development and digital marketing, we provide end-to-end solutions to help your business thrive in the digital landscape.
              </p>
              <Button size="lg" className="bg-white text-[#06807D] hover:bg-gray-100">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of digital services to help your business grow and succeed online.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center mb-6 ${service.color}`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={service.href}>
                    <Button className="w-full" variant="outline">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Choose Insight Tech Digital?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We're not just another digital agency. We're your strategic partner in digital growth, committed to delivering measurable results and exceptional service.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <Target className="h-6 w-6 text-[#06807D] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Result-Driven</h4>
                        <p className="text-sm text-gray-600">We focus on metrics that matter to your business</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Users className="h-6 w-6 text-[#06807D] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Expert Team</h4>
                        <p className="text-sm text-gray-600">Skilled professionals with proven expertise</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Zap className="h-6 w-6 text-[#06807D] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Fast Delivery</h4>
                        <p className="text-sm text-gray-600">Quick turnaround without compromising quality</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-[#06807D] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Quality Assured</h4>
                        <p className="text-sm text-gray-600">Rigorous quality control and testing</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#06807D] rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Our Benefits</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <Button size="lg" className="bg-white text-[#06807D] hover:bg-gray-100 w-full">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss how our digital services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#06807D] hover:bg-[#056b68]">
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
