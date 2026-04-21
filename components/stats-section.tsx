"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Building2, Cable, Award } from "lucide-react"

const stats = [
  {
    icon: Cable,
    value: 500,
    suffix: "+",
    label: "Fibre Installations",
    description: "Successfully completed",
  },
  {
    icon: Building2,
    value: 150,
    suffix: "+",
    label: "Business Clients",
    description: "Across South Africa",
  },
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    label: "Happy Customers",
    description: "Homes & enterprises",
  },
  {
    icon: Award,
    value: 99.9,
    suffix: "%",
    label: "Uptime Guarantee",
    description: "Network reliability",
  },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current * 10) / 10)
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [value, isInView])
  
  return (
    <span>
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full bg-navy/5 group-hover:bg-orange/10 transition-colors" />
                {/* Icon */}
                <stat.icon className="w-8 h-8 text-navy group-hover:text-orange transition-colors" />
                {/* Decorative Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-orange/20"
                  initial={{ scale: 1 }}
                  animate={isInView ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                />
              </div>
              
              <div className="text-4xl lg:text-5xl font-bold text-navy mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
