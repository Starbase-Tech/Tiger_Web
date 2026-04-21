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
      {/* Navy Background with Diagonal */}
      <div className="absolute inset-0 bg-navy clip-diagonal" />
      
      {/* Animated Fiber Background */}
      <FiberAnimation />
      
      {/* Geometric Accents */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] opacity-10">
        <div className="absolute inset-0 border-2 border-cyan rotate-45 rounded-3xl" />
        <div className="absolute inset-8 border border-orange rotate-12 rounded-3xl" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-sm font-medium">Leading IT Solutions Provider</span>
            </motion.div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="block text-balance">Connecting</span>
              <span className="block text-orange">Data.</span>
              <span className="block text-balance">Powering</span>
              <span className="block text-cyan">Futures.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-8 leading-relaxed">
              Transform your business with high-speed fibre connectivity, 
              intelligent data analytics, and comprehensive IT solutions 
              tailored for the modern enterprise.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-orange hover:bg-orange-light text-navy font-bold px-8 py-6 text-lg shadow-2xl hover:shadow-orange/20 transition-all"
              >
                <Link href="#contact">
                  Get Fibre Installed
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Link href="#services">
                  <Play className="mr-2 h-5 w-5" />
                  Explore Services
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
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
            </motion.div>
          </motion.div>
          
          {/* Right Content - Fiber Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full aspect-square max-w-lg">
              {/* Central Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyan to-orange rounded-full glow-node flex items-center justify-center">
                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-cyan rounded-full animate-pulse" />
                </div>
              </div>
              
              {/* Orbiting Elements */}
              {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-4 h-4"
                  style={{
                    transform: `rotate(${angle}deg) translateX(180px) rotate(-${angle}deg)`,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.3,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-4 h-4 bg-cyan rounded-full shadow-lg shadow-cyan/50" />
                </motion.div>
              ))}
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.line
                    key={index}
                    x1="200"
                    y1="200"
                    x2={200 + 180 * Math.cos((angle * Math.PI) / 180)}
                    y2={200 + 180 * Math.sin((angle * Math.PI) / 180)}
                    stroke="url(#fiber-gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                ))}
                <defs>
                  <linearGradient id="fiber-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00B4D8" />
                    <stop offset="100%" stopColor="#FF7A00" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Service Labels */}
              {[
                { label: "FIBRE", angle: 0 },
                { label: "DATA", angle: 120 },
                { label: "IT", angle: 240 },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="absolute text-xs font-bold text-cyan tracking-widest"
                  style={{
                    top: `${50 + 38 * Math.sin((item.angle * Math.PI) / 180)}%`,
                    left: `${50 + 38 * Math.cos((item.angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
