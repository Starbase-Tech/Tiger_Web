"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Zap, Users, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Enterprise-grade security protocols protecting your data infrastructure",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "High-speed fibre connections delivering unmatched performance",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with years of industry experience",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "ISO-certified processes ensuring consistent excellence",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Image Placeholder with Styled Background */}
              <div className="absolute inset-0 bg-navy">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Abstract Tech Visualization */}
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    {/* Network Lines */}
                    {[
                      { x1: 50, y1: 150, x2: 200, y2: 100 },
                      { x1: 200, y1: 100, x2: 350, y2: 130 },
                      { x1: 200, y1: 100, x2: 200, y2: 200 },
                      { x1: 50, y1: 150, x2: 150, y2: 220 },
                      { x1: 150, y1: 220, x2: 200, y2: 200 },
                      { x1: 200, y1: 200, x2: 300, y2: 220 },
                      { x1: 300, y1: 220, x2: 350, y2: 130 },
                    ].map((line, i) => (
                      <motion.line
                        key={i}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="url(#about-gradient)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    ))}
                    
                    {/* Nodes */}
                    {[
                      { cx: 50, cy: 150, r: 12 },
                      { cx: 200, cy: 100, r: 16 },
                      { cx: 350, cy: 130, r: 12 },
                      { cx: 150, cy: 220, r: 10 },
                      { cx: 200, cy: 200, r: 14 },
                      { cx: 300, cy: 220, r: 10 },
                    ].map((node, i) => (
                      <motion.circle
                        key={i}
                        cx={node.cx}
                        cy={node.cy}
                        r={node.r}
                        fill="#1a365d"
                        stroke="#00B4D8"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                      />
                    ))}
                    
                    {/* Central Glow */}
                    <motion.circle
                      cx="200"
                      cy="150"
                      r="60"
                      fill="url(#radial-glow)"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 0.3 } : {}}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                    
                    <defs>
                      <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00B4D8" />
                        <stop offset="100%" stopColor="#FF7A00" />
                      </linearGradient>
                      <radialGradient id="radial-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00B4D8" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-orange text-navy px-8 py-6 rounded-2xl shadow-2xl"
              >
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </motion.div>
            </div>
            
            {/* Decorative Line */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-orange to-transparent" />
          </motion.div>
          
          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-orange" />
              <span className="text-orange font-semibold tracking-wide text-sm uppercase">About Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              <span className="text-balance">Your Partner in</span>
              <br />
              <span className="text-orange">Digital Connectivity</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Tigerweb Group is a leading IT solutions provider specializing in fibre infrastructure, 
              data analytics, and comprehensive technology services. We empower businesses 
              to thrive in the digital age with reliable, high-speed connectivity and 
              intelligent data solutions.
            </p>
            
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Founded with a vision to bridge the digital divide, we have grown to become 
              a trusted partner for enterprises across South Africa, delivering cutting-edge 
              technology solutions that drive growth and efficiency.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
