import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  services: [
    { name: "SEO Services", href: "/services/seo" },
    { name: "Local SEO", href: "/services/local-seo" },
    { name: "Technical SEO", href: "/services/technical-seo" },
    { name: "Content Marketing", href: "/services/content-marketing" },
    { name: "Link Building", href: "/services/link-building" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ],
  resources: [
    { name: "SEO Guide", href: "/resources/seo-guide" },
    { name: "Free SEO Audit", href: "/free-audit" },
    { name: "SEO Tools", href: "/tools" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Insight%20Tech%20Digital%20ITD%20-%20Logo-l8H6xcUg2MESqnBzygPy7j9N1NTuem.png"
              alt="Insight Tech Digital Logo"
              width={180}
              height={50}
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Insight Tech Digital is a leading SEO and digital marketing agency helping businesses
              grow their online presence through data-driven strategies and innovative solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-[#ffc433]" />
                <a href="mailto:info@insighttechdigital.com" className="hover:text-[#ffc433]">
                  info@insighttechdigital.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-[#ffc433]" />
                <a href="tel:+1234567890" className="hover:text-[#ffc433]">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-5 w-5 text-[#ffc433]" />
                <span>123 Digital Avenue, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-[#ffc433] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-[#ffc433] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-[#ffc433] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <p>&copy; {new Date().getFullYear()} Insight Tech Digital. All rights reserved.</p>
              <div className="flex gap-4">
                {footerLinks.legal.map((link) => (
                  <Link key={link.name} href={link.href} className="hover:text-[#ffc433]">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="rounded-full bg-gray-800 p-2 hover:bg-[#06807D] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
