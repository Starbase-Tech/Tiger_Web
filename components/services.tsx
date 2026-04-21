"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Cable, BarChart3, Database, Server, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "fibre",
    icon: Cable,
    title: "Fibre Installation",
    subtitle: "High-Speed Connectivity",
    description: "Enterprise-grade fibre optic installations delivering blazing-fast internet speeds for homes and businesses. Experience seamless connectivity with our professional installation services.",
    features: [
      "Up to 1Gbps speeds",
      "Professional installation",
      "24/7 monitoring",
      "99.9% uptime guarantee",
      "Scalable solutions",
    ],
    color: "orange",
    featured: true,
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics",
    subtitle: "Intelligent Insights",
    description: "Transform raw data into actionable insights with our advanced analytics solutions. Make informed decisions powered by real-time data visualization and predictive analytics.",
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Custom reporting",
      "Data visualization",
      "AI-powered insights",
    ],
    color: "cyan",
    featured: false,
  },
  {
    id: "informatics",
    icon: Database,
    title: "Informatics",
    subtitle: "Data Management",
    description: "Comprehensive data management and information systems that streamline your operations. From database design to system integration, we handle your information needs.",
    features: [
      "Database management",
      "System integration",
      "Data migration",
      "Information security",
      "Cloud solutions",
    ],
    color: "navy",
    featured: false,
  },
  {
    id: "it-services",
    icon: Server,
    title: "IT Services",
    subtitle: "Complete Solutions",
    description: "End-to-end IT support and managed services keeping your business running smoothly. From helpdesk support to infrastructure management, we&apos;ve got you covered.",
    features: [
      "Managed IT support",
      "Network security",
      "Cloud migration",
      "Hardware solutions",
      "IT consulting",
    ],
    color: "navy",
    featured: false,
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full">
          <defs>
            <pattern id="service-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor" className="text-navy/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#service-grid)" />
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
            <span className="text-orange font-semibold tracking-wide text-sm uppercase">Our Services</span>
            <span className="w-12 h-0.5 bg-orange" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            <span className="text-balance">Comprehensive IT Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            From high-speed fibre installations to intelligent data analytics, 
            we provide end-to-end technology solutions for the modern enterprise.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className={`group relative ${service.featured ? 'md:col-span-2' : ''}`}
            >
              <div className={`
                relative bg-white rounded-2xl overflow-hidden transition-all duration-500
                ${hoveredService === service.id ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'}
                ${service.featured ? 'border-2 border-orange' : 'border border-border'}
              `}>
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-orange text-navy text-xs font-bold px-3 py-1 rounded-full z-10">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-8 ${service.featured ? 'lg:flex lg:items-center lg:gap-12' : ''}`}>
                  {/* Icon & Title */}
                  <div className={service.featured ? 'lg:w-1/2' : ''}>
                    <div className={`
                      inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300
                      ${service.color === 'orange' ? 'bg-orange/10 text-orange group-hover:bg-orange group-hover:text-navy' : ''}
                      ${service.color === 'cyan' ? 'bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-navy' : ''}
                      ${service.color === 'navy' ? 'bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white' : ''}
                    `}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <div className="text-sm text-muted-foreground font-medium mb-2">{service.subtitle}</div>
                    <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    
                    {!service.featured && (
                      <Button 
                        asChild
                        variant="ghost" 
                        className="text-navy hover:text-orange hover:bg-orange/10 p-0 h-auto font-semibold group/btn"
                      >
                        <Link href="#contact">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    )}
                  </div>
                  
                  {/* Features List */}
                  <div className={service.featured ? 'lg:w-1/2 mt-8 lg:mt-0' : 'hidden'}>
                    <div className="bg-muted/50 rounded-xl p-6">
                      <div className="text-sm font-semibold text-navy mb-4 uppercase tracking-wide">What&apos;s Included</div>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-orange" />
                            </div>
                            <span className="text-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <Button 
                        asChild
                        className="w-full mt-6 bg-navy hover:bg-navy-light text-white font-semibold py-6"
                      >
                        <Link href="#contact">
                          Get Fibre Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Accent Line */}
                <div className={`
                  absolute bottom-0 left-0 h-1 transition-all duration-500
                  ${hoveredService === service.id ? 'w-full' : 'w-0'}
                  ${service.color === 'orange' ? 'bg-orange' : ''}
                  ${service.color === 'cyan' ? 'bg-cyan' : ''}
                  ${service.color === 'navy' ? 'bg-navy' : ''}
                `} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
