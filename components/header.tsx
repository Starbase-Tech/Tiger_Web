"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Fibre", href: "#fibre" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-navy text-primary-foreground py-2.5 relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange" />
                <span>Germiston, South Africa</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange" />
                <span>Mon - Fri: 8:00AM - 5:00PM</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+263000000000" className="flex items-center gap-2 hover:text-orange transition-colors">
                <Phone className="h-4 w-4 text-orange" />
                <span className="hidden sm:inline">+27 61 102 3526</span>
              </a>
              <a href="mailto:info@tigerweb.co.zw" className="flex items-center gap-2 hover:text-orange transition-colors">
                <Mail className="h-4 w-4 text-orange" />
                <span className="hidden sm:inline">info@tigerweb.co.za</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border" 
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/images/logo.png"
                alt="Tiger Web Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-foreground font-medium hover:text-orange transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-3/4" />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                asChild
                className="bg-navy hover:bg-navy-light text-primary-foreground px-6 py-5 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="#contact">
                  Get Connected
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-lg font-medium text-foreground hover:text-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Button 
                    asChild
                    className="w-full bg-navy hover:bg-navy-light text-primary-foreground mt-4"
                  >
                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Connected
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
