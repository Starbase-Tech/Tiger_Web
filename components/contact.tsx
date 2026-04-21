"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Pretoria, South Africa"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+27 000 000 000", "+27 000 000 001"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@tigerweb.co.za", "support@tigerweb.co.za"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00AM - 5:00PM", "Sat: 9:00AM - 1:00PM"],
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-navy clip-slant" />
      
      <div className="container mx-auto px-4 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white lg:pr-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-0.5 bg-orange" />
              <span className="text-orange font-semibold tracking-wide text-sm uppercase">Contact Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-balance">Ready to Get</span>
              <br />
              <span className="text-orange">Connected?</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Whether you need fibre installation, IT support, or data solutions, 
              our team is ready to help transform your business connectivity.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{item.title}</div>
                    {item.details.map((detail, i) => (
                      <div key={i} className="text-white/60 text-sm">{detail}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Social/Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-4 text-sm text-white/60">
                <CheckCircle className="w-5 h-5 text-cyan" />
                <span>Certified IT professionals</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/60 mt-3">
                <CheckCircle className="w-5 h-5 text-cyan" />
                <span>Free consultation & site survey</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/60 mt-3">
                <CheckCircle className="w-5 h-5 text-cyan" />
                <span>24/7 customer support</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-navy mb-2">Send us a message</h3>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <Input 
                          id="name"
                          placeholder="John Doe" 
                          required
                          className="h-12 bg-muted/50 border-border focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input 
                          id="company"
                          placeholder="Your Company" 
                          className="h-12 bg-muted/50 border-border focus:border-navy"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input 
                          id="email"
                          type="email" 
                          placeholder="john@example.com" 
                          required
                          className="h-12 bg-muted/50 border-border focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input 
                          id="phone"
                          type="tel" 
                          placeholder="+263 000 000 000" 
                          className="h-12 bg-muted/50 border-border focus:border-navy"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interest
                      </label>
                      <select 
                        id="service"
                        className="w-full h-12 px-4 rounded-md bg-muted/50 border border-border text-foreground focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="fibre">Fibre Installation</option>
                        <option value="analytics">Data Analytics</option>
                        <option value="informatics">Informatics</option>
                        <option value="it-services">IT Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us about your project or requirements..." 
                        rows={4}
                        required
                        className="bg-muted/50 border-border focus:border-navy resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-6 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
