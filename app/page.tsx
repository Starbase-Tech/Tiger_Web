import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { StatsSection } from "@/components/stats-section"
import { FibreSection } from "@/components/fibre-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <StatsSection />
      <FibreSection />
      <Contact />
      <Footer />
    </main>
  )
}
