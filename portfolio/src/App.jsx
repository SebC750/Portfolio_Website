import './App.css'
import Navbar from "./components/Navbar"
import IntroSection from './components/IntroSection'
import AboutSection from './components/AboutSection'
import TechStackSection from './components/TechStackSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <IntroSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section >
        <TechStackSection/>
      </section>
      <section>
        <ProjectsSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
