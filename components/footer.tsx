"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Fibre Installation", href: "#services" },
    { name: "Data Analytics", href: "#services" },
    { name: "Informatics", href: "#services" },
    { name: "IT Services", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#fibre" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-navy-dark text-white relative">
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-navy via-orange to-cyan" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Tiger Web Logo"
              width={160}
              height={50}
              className="h-10 w-auto"
            />            
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Connecting Data. Powering Futures. Tiger Web provides cutting-edge 
              IT solutions including fibre installation, data analytics, and 
              comprehensive technology services.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange hover:text-navy transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-orange transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-orange transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-orange transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-orange transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/60 hover:text-orange transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-orange transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Tiger Web. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/60 hover:text-orange transition-colors group"
            aria-label="Scroll to top"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange group-hover:bg-orange group-hover:text-navy transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
