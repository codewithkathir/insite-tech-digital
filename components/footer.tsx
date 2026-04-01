import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#06807D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Insight Tech Digital"
                width={160}
                height={42}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Turning digital complexity into clarity that drives real business growth. 
              Your trusted partner for insight-driven digital success.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-6 text-[#ffc433]">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                  Pay-Per-Click Advertising
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                  LLM Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-6 text-[#ffc433]">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-white/80 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-white/80 hover:text-white text-sm transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-white/80 hover:text-white text-sm transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-6 text-[#ffc433]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#ffc433] shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">support@insighttechdigital.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#ffc433] shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">+1 (009) 544-7818</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ffc433] shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">993 Renner Burg, West Rond, MT 94251-030, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Insight Tech Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
