"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { FiberAnimation } from "./fiber-animation"

// ─── CSS for animated cards ───────────────────────────────────────────
const CardCSS = `
  @keyframes float-a {
    0%,100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-18px) rotate(1.5deg); }
    66% { transform: translateY(-8px) rotate(-1deg); }
  }
  @keyframes float-b {
    0%,100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-14px) rotate(-2deg); }
    66% { transform: translateY(-22px) rotate(1deg); }
  }
  @keyframes float-c {
    0%,100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
  }
  @keyframes float-d {
    0%,100% { transform: translateY(0px) rotate(0deg); }
    40% { transform: translateY(-12px) rotate(-1.5deg); }
    80% { transform: translateY(-24px) rotate(1deg); }
  }
  @keyframes pulse-ring {
    0% { transform: scale(0.9); opacity: 0.6; }
    70% { transform: scale(1.4); opacity: 0; }
    100% { transform: scale(1.4); opacity: 0; }
  }
  @keyframes card-glow {
    0%,100% { box-shadow: 0 0 20px rgba(6,182,212,0.2), 0 8px 32px rgba(0,0,0,0.4); }
    50% { box-shadow: 0 0 40px rgba(6,182,212,0.45), 0 8px 32px rgba(0,0,0,0.4); }
  }

  .hero-right-section {
    position: relative;
    height: 600px;
    width: 100%;
  }
  .card-wrap {
    position: absolute;
    cursor: pointer;
  }
  /* Updated positions for larger cards */
  .card-wrap:nth-child(1) { top: 0; left: 40px; animation: float-a 6s ease-in-out infinite; }
  .card-wrap:nth-child(2) { top: 60px; right: 0; animation: float-b 7.5s ease-in-out infinite; }
  .card-wrap:nth-child(3) { bottom: 80px; left: 0; animation: float-c 5.5s ease-in-out infinite; }
  .card-wrap:nth-child(4) { bottom: 20px; right: 40px; animation: float-d 8s ease-in-out infinite; }
  
  .service-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(6,182,212,0.25);
    border-radius: 24px;
    padding: 24px;
    backdrop-filter: blur(16px);
    animation: card-glow 4s ease-in-out infinite;
    transition: transform 0.3s, border-color 0.3s;
    position: relative;
    overflow: hidden;
    min-width: 220px;
  }
  .service-card::before {
    content: '';
    position: absolute; top: 0; left: -100%;
    width: 60%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
    transition: left 0.6s ease;
  }
  .card-wrap:hover .service-card {
    transform: scale(1.06);
    border-color: rgba(6,182,212,0.6);
  }
  .card-wrap:hover .service-card::before { left: 140%; }
  
  .card-img-wrap {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
  }
  .card-img-wrap img {
    width: 220px;
    height: 160px;
    object-fit: cover;
    display: block;
    border-radius: 16px;
    transition: transform 0.4s;
  }
  .card-wrap:hover .card-img-wrap img { transform: scale(1.08); }
  .card-img-wrap::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(180deg, transparent 50%, rgba(10,22,40,0.7) 100%);
    border-radius: 16px;
  }
  .card-label {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #06b6d4;
    margin-top: 14px;
    padding: 0 4px;
  }
  .card-desc {
    font-size: 13px;
    color: rgba(255,255,255,0.6);
    margin-top: 6px;
    padding: 0 4px;
  }
  .card-ping {
    position: absolute; top: -8px; right: -8px;
    width: 18px;
    height: 18px;
    z-index: 10;
  }
  .card-ping span {
    position: absolute; inset: 0;
    border-radius: 50%;
    background: #f97316;
    animation: pulse-ring 2s ease infinite;
  }
  .card-ping span:last-child {
    animation: none;
    width: 10px;
    height: 10px;
    top: 4px;
    left: 4px;
  }

  /* Responsive adjustments */
  @media (max-width: 1280px) {
    .service-card {
      min-width: 180px;
      padding: 18px;
    }
    .card-img-wrap img {
      width: 180px;
      height: 130px;
    }
    .card-label {
      font-size: 14px;
    }
    .card-desc {
      font-size: 11px;
    }
  }
`

const CARDS = [
  {
    src: "/images/fibre.jpg",
    label: "FIBRE",
    desc: "High-speed connectivity",
    ping: true,
  },
  {
    src: "/images/analytics.jpg",
    label: "ANALYTICS",
    desc: "Intelligent data insights",
    ping: false,
  },
  {
    src: "/images/it_services.jpg",
    label: "IT SERVICES",
    desc: "End-to-end solutions",
    ping: true,
  },
  {
    src: "/images/informatics.jpg",
    label: "NETWORKING",
    desc: "Secure infrastructure",
    ping: false,
  },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CardCSS }} />
      
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
            
            {/* LEFT CONTENT */}
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
            
            {/* RIGHT CONTENT - Larger Animated Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center relative"
            >
              <div className="hero-right-section">
                {CARDS.map((card, i) => (
                  <div className="card-wrap" key={i}>
                    <div className="service-card">
                      {card.ping && (
                        <div className="card-ping">
                          <span />
                          <span />
                        </div>
                      )}
                      <div className="card-img-wrap">
                        <img src={card.src} alt={card.label} />
                      </div>
                      <div className="card-label">{card.label}</div>
                      <div className="card-desc">{card.desc}</div>
                    </div>
                  </div>
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
    </>
  )
}