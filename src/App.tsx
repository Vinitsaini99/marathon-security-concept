import { About } from "./components/About"
import { Coverage } from "./components/Coverage"
import { DemoBanner } from "./components/DemoBanner"
import { FAQ } from "./components/FAQ"
import { FinalCTA } from "./components/FinalCTA"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Industries } from "./components/Industries"
import { LeadForm } from "./components/LeadForm"
import { MobileCTA } from "./components/MobileCTA"
import { Navbar } from "./components/Navbar"
import { Process } from "./components/Process"
import { Services } from "./components/Services"
import { Testimonials } from "./components/Testimonials"
import { TrustBar } from "./components/TrustBar"
import { WhatsAppFloat } from "./components/WhatsAppFloat"
import { WhyUs } from "./components/WhyUs"
import { useReveal } from "./hooks/useReveal"

export default function App() {
  useReveal()

  return (
    <div className="min-w-0 overflow-x-hidden pb-20 md:pb-0">
      <DemoBanner />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Coverage />
        <Industries />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCTA />
    </div>
  )
}
