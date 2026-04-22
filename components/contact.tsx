"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["5 Abelia Rd, Primrose Hill, Germiston, South Africa"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+27 78 900 6759", "+27 61 102 3526"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@tigerweb.co.za", "support@tigerweb.co.za", "admin@tigerweb.co.za"],
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Failed")

      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
      alert("Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-navy lg:bg-transparent">
      
      {/* Responsive Background */}
      <div className="absolute inset-0 bg-navy lg:w-1/2 lg:clip-slant" />

      <div className="container mx-auto px-4 relative" ref={ref}>
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white max-w-xl lg:pr-12"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-0.5 bg-orange" />
              <span className="text-orange text-sm font-semibold uppercase tracking-wide">
                Contact Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to Get <br />
              <span className="text-orange">Connected?</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
              Whether you need fibre installation, IT support, or data solutions,
              our team is ready to help transform your business connectivity.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{item.title}</div>
                    {item.details.map((detail, i) => (
                      <div key={i} className="text-sm text-white/70">
                        {detail}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* TRUST + WHATSAPP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-10 pt-6 border-t border-white/10"
            >
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan" />
                  Certified IT professionals
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan" />
                  Free consultation & site survey
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan" />
                  24/7 customer support
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/27611023526?text=Hi%20Tigerweb%20Group%2C%20I%20need%20more%20info"
                target="_blank"
                className="inline-block mt-6"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
              
              {!isSubmitted ? (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2">
                    Send us a message
                  </h3>
                  <p className="text-muted-foreground mb-6 sm:mb-8">
                    We’ll get back to you within 24 hours
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <Input name="name" placeholder="Full Name" required className="h-12" />
                    <Input name="company" placeholder="Company (optional)" className="h-12" />

                    <Input type="email" name="email" placeholder="Email Address" required className="h-12" />
                    <Input type="tel" name="phone" placeholder="Phone Number" className="h-12" />

                    <select
                      name="service"
                      required
                      className="w-full h-12 px-4 rounded-md border bg-muted/50"
                    >
                      <option value="">Select a service</option>
                      <option value="fibre">Fibre Installation</option>
                      <option value="analytics">Data Analytics</option>
                      <option value="informatics">Informatics</option>
                      <option value="it-services">IT Services</option>
                      <option value="other">Other</option>
                    </select>

                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-navy hover:bg-navy-light text-white py-5 text-base sm:text-lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We’ll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Send Another
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}