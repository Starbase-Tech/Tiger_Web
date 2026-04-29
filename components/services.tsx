"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Cable,
  BarChart3,
  Database,
  Server,
  ArrowRight,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "fibre",
    icon: Cable,
    title: "Fibre Installation",
    subtitle: "High-Speed Connectivity",
    description:
      "Enterprise-grade fibre optic installations delivering blazing-fast internet speeds for homes and businesses. Experience seamless connectivity with our professional installation services.",
    features: [
      "High-speed fibre deployment for homes and businesses",
      "Structured cabling and network planning",
      "Professional installation and testing",
      "24/7 monitoring and uptime support",
      "Scalable enterprise connectivity solutions",
    ],
    color: "orange",
    featured: true,
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics",
    subtitle: "Intelligent Insights",
    description:
      "Transform raw data into actionable insights with advanced analytics solutions designed to improve decision-making and operational efficiency.",
    features: [
      "Data Engineering – TigerWeb Group provides data pipelines, ETL processes, and structured data flow management for reliable reporting.",
      "Analytics Audit – We assess your current reporting systems, identify gaps, and improve decision-making accuracy.",
      "Data Visualization (Power BI) – Interactive dashboards and visual reporting for real-time business performance tracking.",
      "Predictive Analytics – Forecast trends, customer behavior, and business outcomes using data-driven models.",
      "Reports and Presentation – Executive-ready reports and presentation packs for stakeholders and management teams.",
      "Model Context Protocol (MCP) – Smart integration of context-aware systems for better automation and AI workflows.",
      "Business Intelligence (BI) – Strategic reporting systems that turn operational data into executive insights.",
    ],
    color: "cyan",
    featured: false,
  },
  {
    id: "informatics",
    icon: Database,
    title: "Informatics",
    subtitle: "Data Management",
    description:
      "Comprehensive information systems and data management solutions that streamline business operations and improve information flow.",
    features: [
      "Database management and optimization",
      "System integration across departments",
      "Secure data migration services",
      "Information governance and security",
      "Cloud infrastructure and storage solutions",
    ],
    color: "navy",
    featured: false,
  },
  {
    id: "it-services",
    icon: Server,
    title: "IT Services",
    subtitle: "Complete Solutions",
    description:
      "End-to-end IT support and managed services keeping your business running smoothly with reliable infrastructure and expert support.",
    features: [
      "Managed IT support and helpdesk services",
      "Network setup and cybersecurity protection",
      "Cloud migration and system modernization",
      "Hardware procurement and maintenance",
      "Strategic IT consulting and infrastructure planning",
    ],
    color: "navy",
    featured: false,
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-0.5 bg-orange" />
            <span className="text-orange font-semibold tracking-wide text-sm uppercase">
              Our Services
            </span>
            <span className="w-12 h-0.5 bg-orange" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Comprehensive IT Solutions
          </h2>

          <p className="text-lg text-muted-foreground">
            From fibre installations to business intelligence and enterprise IT support,
            we provide end-to-end technology solutions for the modern enterprise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${service.featured ? "md:col-span-2" : ""}`}
            >
              <div
                onClick={() =>
                  setActiveService(activeService === service.id ? null : service.id)
                }
                className={`cursor-pointer bg-white rounded-2xl border transition-all duration-300 overflow-hidden
                  ${service.featured ? "border-orange" : "border-border"}
                  ${activeService === service.id ? "shadow-2xl" : "shadow-lg"}`}
              >
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-muted">
                    <service.icon className="w-8 h-8 text-navy" />
                  </div>

                  <div className="text-sm text-muted-foreground font-medium mb-2">
                    {service.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {activeService === service.id && (
                    <div className="space-y-4 border-t pt-6 mt-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center mt-1 flex-shrink-0">
                            <Check className="w-3 h-3 text-orange" />
                          </div>
                          <p className="text-sm text-foreground leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}

                      <Button asChild className="mt-4 bg-navy hover:bg-navy-light text-white">
                        <Link href="#contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
