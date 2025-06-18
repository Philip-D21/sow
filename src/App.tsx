import Hero from './components/Hero'
import IconSection from './components/IconSection'
import WhatIsSow from './components/WhatIsSow'
import WhoItsFor from './components/WhoItsFor'
import HowItWorks from './components/HowItWorks'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-off-white font-inter text-dark-navy">
      <Hero />
      <IconSection />
      <WhatIsSow />
      <WhoItsFor />
      <HowItWorks />
      <WaitlistForm />
      <Footer />
    </div>
//   <div className="bg-dark-navy text-off-white font-inter min-h-screen flex items-center justify-center">
//   <h1 className="text-tech-green text-4xl font-bold">
//     Tailwind is working!
//   </h1>
// </div>
  )
}

export default App
