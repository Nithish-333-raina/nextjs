"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "WORK", href: "/work" },
    { name: "ABOUT", href: "/about" },
    { name: "NEWS", href: "/news" },
    { name: "THINKING", href: "/thinking" },
    { name: "PLEDGE", href: "/pledge" },
    { name: "CAREERS", href: "/careers" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <nav className="flex items-center justify-between p-6 md:p-8 bg-[#252422] text-white relative z-50">
      <Link
        href="/"
        className="text-xl md:text-2xl font-bold tracking-tight hover:text-[#f9cdcd] transition-colors duration-300"
      >
        BASIC/DEPT.
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`hover:text-[#f9cdcd] transition-colors duration-300 ${
              pathname === item.href ? "text-[#f9cdcd]" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#252422] border-t border-gray-700 md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-[#f9cdcd] transition-colors duration-300 ${
                  pathname === item.href ? "text-[#f9cdcd]" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
