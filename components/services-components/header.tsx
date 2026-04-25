"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "SEO Services", href: "/services/seo" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Content Marketing", href: "/services/content-marketing" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Insight%20Tech%20Digital%20ITD%20-%20Logo-l8H6xcUg2MESqnBzygPy7j9N1NTuem.png"
            alt="Insight Tech Digital Logo"
            width={180}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu ? (
                <div
                  className="group"
                  onMouseEnter={() => setOpenSubmenu(item.name)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#06807D] transition-colors">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openSubmenu === item.name && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-gray-100">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#06807D]/5 hover:text-[#06807D]"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#06807D] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button className="bg-[#06807D] hover:bg-[#056b68] text-white">
            Get Free Consultation
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === item.name ? null : item.name)
                      }
                      className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-700"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubmenu === item.name && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-[#06807D]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-gray-700 hover:text-[#06807D]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button className="mt-4 w-full bg-[#06807D] hover:bg-[#056b68] text-white">
              Get Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
