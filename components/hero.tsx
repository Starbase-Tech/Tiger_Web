"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { FiberAnimation } from "./fiber-animation"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]" />
      <FiberAnimation />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-sm">Leading IoT Solutions Provider</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="block">Connecting</span>
              <span className="block text-orange">Data.</span>
              <span className="block">Powering</span>
              <span className="block text-cyan">Futures.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-8">
              Transform your business with high-speed fibre connectivity,
              intelligent data analytics, and comprehensive IT solutions
              tailored for the modern enterprise.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-orange text-navy px-8 py-6 text-lg">
                <Link href="#contact">
                  Get Fibre Installed
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-black px-8 py-6 text-lg"
              >
                <Link href="#services">
                  <Play className="mr-2 h-5 w-5" />
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "500+", label: "Installations" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl sm:text-3xl font-bold text-orange">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - CLEAN GIF */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-[520px] rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/bg_gif.gif"
                alt="Network visualization"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-orange rounded-full" />
        </motion.div>
      </motion.div>

    </section>
  )
}