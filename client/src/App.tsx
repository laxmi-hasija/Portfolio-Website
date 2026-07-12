
import './App.css'
import Navbar from './components/Navbar'
import Aboutme from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Hero from './components/Hero'

import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {


  return (
    <>
    <Navbar/>
     <Hero/>
     <Aboutme/>
     <Skills/>
     <Education/>
     <Projects/>
     <Contact/>
     <Footer/>

    </>
  )
}

export default App
