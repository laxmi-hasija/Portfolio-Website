

import "./App.css";
import Navbar from "./components/Navbar";
import Aboutme from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ThankYou from "./components/ThankYou";

import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <ThankYou/>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;