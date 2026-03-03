import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import FeaturesSection from './components/sections/FeaturesSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import ServicesSection from './components/sections/ServicesSection'
import GamificationSection from './components/sections/GamificationSection'
import LostFoundSection from './components/sections/LostFoundSection'
import CTASection from './components/sections/CTASection'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ServicesSection />
        <GamificationSection />
        <LostFoundSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
