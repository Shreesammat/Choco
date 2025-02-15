import FAQ from "../components/FAQ"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
const LandingPage = () => {
  return (
    <div className='w-full h-full flex flex-col justify-between items-center'>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </div>
  )
}

export default LandingPage
