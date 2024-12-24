
import './App.css'
import Navbar from './Componets/NavBar'
import AboutSection from './Componets/About'
import FAQ from './Componets/Faq'
import Footer from './Componets/Footer'
import Slider from './Componets/ProblemStatement'
import Box from './Componets/Box'


function App() {
  return (
    <>
    <Navbar />
    <AboutSection />
    <Box />
    <Slider />
    {/* <Slider /> */}
    <FAQ />
    <Footer />

    </>
  )
}

export default App
