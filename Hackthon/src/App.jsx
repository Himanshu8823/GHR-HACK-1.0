
import './App.css'
import Navbar from './Componets/NavBar'
import AboutSection from './Componets/About'
import FAQ from './Componets/Faq'
import Footer from './Componets/Footer'
import Slider from './Componets/ProblemStatement'
import PrizeCards from './Componets/Box'
import RegistrationDetails from './Componets/RegistrationDetails'
import Sponsors from './Componets/Sponsors'
import Contact from './Componets/contact'
import Team from './Componets/team'
import EventHighlights from './Componets/EventHeightlight'
import Home from './Componets/Home'
import Background from './Componets/Background'
import HackathonThemes from './Componets/Theme'
import ProblemStatements from './Componets/Problems'
import InfiniteSlider from './Componets/InfiniteSlider'

function App() {
  return (
    <div className='App' >
    {/* <Navbar  />
    <Home  /> */}
    <Background />
    <AboutSection />
    <InfiniteSlider />
    <EventHighlights />
    <HackathonThemes />
    <PrizeCards />
    <RegistrationDetails />
    <Sponsors />
    <Team />
    <FAQ />
    <Contact />
    <Footer />
    {/* <ProblemStatements /> */}
    </div>
  )
}

export default App
