import React, { useEffect } from "react";
import Lenis from 'lenis';
import Navbar from "./components/Navbar/Navbar";
import PatraAI from "./components/PatraAI/PatraAI";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import About from './components/About/About';
import Journey from "./components/Journey/Journey";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import StickyMiniNavbar from "./components/StickyMiniNavbar/StickyMiniNavbar";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";


import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false, // Optional: normally false for better native feel on touch but can be true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <ThemeProvider>
      <CustomCursor />
      <PatraAI />

      <div className="App">
        <BrowserRouter>
          <div className="bg-gray-100 dark:bg-[#010c1e] transition-colors duration-300">

            <StickyMiniNavbar />
            <div className="relative pt-20">

              {/* Routing logic */}
              <Routes>

                <Route
                  path="/"
                  element={
                    <div className="bg-gray-100 dark:bg-[#010c1e] min-h-screen transition-colors duration-300">
                      <Navbar />
                      <Home />
                      <About />
                      <Skills />
                      <Projects />
                      <Journey />
                      <Footer />
                    </div>
                  }
                />

                {/* EXPERIENCE PAGE */}
                <Route
                  path="/experience"
                  element={
                    <div className="bg-gray-100 dark:bg-[#011028] min-h-screen transition-colors duration-300">
                      <ExperiencePage />
                      <Footer />
                    </div>
                  }
                />

                {/* EDUCATION PAGE */}
                <Route
                  path="/education"
                  element={
                    <div className="bg-gray-100 dark:bg-[#011028] min-h-screen transition-colors duration-300">
                      <EducationPage />
                      <Footer />
                    </div>
                  }
                />



                {/* contact page  */}
                <Route
                  path="/Contact"
                  element={
                    <div className="bg-gray-100 dark:bg-[#011028] min-h-screen transition-colors duration-300">
                      <ContactPage />
                      <Footer />
                    </div>
                  }
                />
                <Route path="/navigation" element={<Journey />} />

              </Routes>
            </div>
          </div>
        </BrowserRouter >
      </div >
    </ThemeProvider>
  );
};

export default App;
