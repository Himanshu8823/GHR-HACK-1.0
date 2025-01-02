
import './App.css'
import Navbar from './Componets/NavBar'
import AboutSection from './Componets/About'
import FAQ from './Componets/Faq'
import Footer from './Componets/Footer'
import Slider from './Componets/ProblemStatement'
import Box from './Componets/Box'
import RegistrationDetails from './Componets/RegistrationDetails'
import Sponsors from './Componets/Sponsors'
import Contact from './Componets/contact'
import Team from './Componets/team'
import EventHighlights from './Componets/EventHeightlight'

function App() {
  return (
    <>
    <Navbar />
    <AboutSection />
    <EventHighlights />
    <Box />
    <RegistrationDetails />
    <Sponsors />
    <Slider />
    {/* <Slider /> */}
    <Contact />
    <Team />
    <FAQ />
    <Footer />

    </>
  )
}

export default App
