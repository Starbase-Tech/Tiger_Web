"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Wifi, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  {
    icon: Zap,
    title: "Lightning Speeds",
    stat: "1 Gbps",
    description: "Experience download speeds up to 1 Gigabit per second",
  },
  {
    icon: Shield,
    title: "Reliable Connection",
    stat: "99.9%",
    description: "Industry-leading uptime guarantee for your business",
  },
  {
    icon: Wifi,
    title: "Symmetrical Speeds",
    stat: "Equal",
    description: "Same upload and download speeds for seamless operations",
  },
  {
    icon: Clock,
    title: "Low Latency",
    stat: "<5ms",
    description: "Near-instant response times for real-time applications",
  },
]

const installationSteps = [
  { step: "01", title: "Site Survey", description: "Free assessment of your property and requirements" },
  { step: "02", title: "Plan Design", description: "Custom fibre route planning and proposal" },
  { step: "03", title: "Installation", description: "Professional cable laying and equipment setup" },
  { step: "04", title: "Activation", description: "Connection testing and handover" },
]

export function FibreSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="fibre" className="relative overflow-hidden">
      {/* Navy Background Section */}
      <div className="bg-navy py-24 relative">
        {/* Animated Fiber Lines Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full">
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1="0%"
                y1={`${10 + i * 12}%`}
                x2="100%"
                y2={`${15 + i * 10}%`}
                stroke="url(#fibre-line-gradient)"
                strokeWidth="1"
                opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: i * 0.2 }}
              />
            ))}
            <defs>
              <linearGradient id="fibre-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="30%" stopColor="#00B4D8" />
                <stop offset="70%" stopColor="#FF7A00" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-orange" />
              <span className="text-orange font-semibold tracking-wide text-sm uppercase">Why Fibre</span>
              <span className="w-12 h-0.5 bg-orange" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-balance">The Future of Connectivity</span>
              <br />
              <span className="text-orange">Starts Here</span>
            </h2>
            
            <p className="text-lg text-white/70">
              Fibre optic technology delivers unmatched speed, reliability, and performance. 
              Upgrade to fibre and experience the difference.
            </p>
          </motion.div>
          
          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-orange/30">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-4 group-hover:bg-orange/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-orange" />
                  </div>
                  
                  <div className="text-3xl font-bold text-cyan mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/60">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Comparison Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-2">Fibre vs Traditional Internet</h3>
              <p className="text-white/60">See why businesses are switching to fibre</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Fibre Side */}
              <div className="bg-gradient-to-br from-orange/20 to-cyan/20 rounded-2xl p-6 border border-orange/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center">
                    <Zap className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Fibre Optic</div>
                    <div className="text-orange text-sm">Recommended</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Download Speed", value: "1000 Mbps", width: "100%" },
                    { label: "Upload Speed", value: "1000 Mbps", width: "100%" },
                    { label: "Latency", value: "5ms", width: "10%" },
                    { label: "Reliability", value: "99.9%", width: "99%" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/70">{item.label}</span>
                        <span className="text-orange font-semibold">{item.value}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange to-cyan rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: item.width } : {}}
                          transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Traditional Side */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 opacity-60">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <div className="text-white/80 font-bold">Traditional DSL</div>
                    <div className="text-white/40 text-sm">Legacy</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Download Speed", value: "50 Mbps", width: "5%" },
                    { label: "Upload Speed", value: "10 Mbps", width: "1%" },
                    { label: "Latency", value: "50ms", width: "50%" },
                    { label: "Reliability", value: "85%", width: "85%" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/50">{item.label}</span>
                        <span className="text-white/50 font-semibold">{item.value}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-white/30 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: item.width } : {}}
                          transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Installation Process Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-navy" />
              <span className="text-navy font-semibold tracking-wide text-sm uppercase">Our Process</span>
              <span className="w-12 h-0.5 bg-navy" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              <span className="text-balance">Simple Installation Process</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Get connected in four easy steps with our professional team
            </p>
          </motion.div>
          
          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {installationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-muted/50 rounded-2xl p-6 h-full border border-border hover:border-navy/20 transition-colors">
                  <div className="text-5xl font-bold text-navy/10 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Connector Line */}
                {index < installationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange" />
                )}
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Button 
              asChild
              size="lg"
              className="bg-orange hover:bg-orange-light text-navy font-bold px-10 py-6 text-lg"
            >
              <Link href="#contact">
                Request Free Site Survey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
