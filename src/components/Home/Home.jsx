import { motion } from "framer-motion";
import ReactTypingEffect from 'react-typing-effect';
import {  FaArrowRight } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center overflow-x-hidden lg:overflow-hidden font-sans bg-transparent selection:bg-blue-600/40 selection:text-white"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020205] via-[#050b1a] to-[#000000]" />

        {/* Optimized Static Radial Glows with Compositor-only Animations */}
        <div className="absolute inset-0 overflow-hidden opacity-80 pointer-events-none z-0">
          {/* Blob 1 - Blue */}
          <div 
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] blur-[80px]"
            style={{
              animation: "float-blob-1 25s infinite alternate ease-in-out",
              willChange: "transform"
            }}
          />
          {/* Blob 2 - Indigo */}
          <div 
            className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,transparent_70%)] blur-[80px]"
            style={{
              animation: "float-blob-2 20s infinite alternate ease-in-out",
              willChange: "transform"
            }}
          />
          {/* Blob 3 - Emerald */}
          <div 
            className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] blur-[90px]"
            style={{
              animation: "float-blob-3 22s infinite alternate ease-in-out",
              willChange: "transform"
            }}
          />
        </div>

        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between h-full pt-28 pb-16 lg:pt-16 lg:pb-16">

        <div className="w-full lg:w-[55%] flex flex-col items-start text-left z-20 ">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="premium-header-badge mb-5"
          >
            <span className="premium-header-badge-dot animate-pulse" />
            <span className="text-white text-sm md:text-base font-medium tracking-tight">
              Hi, I am Amit Kumar Patra
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15] mb-5"
          >
            I like crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 block min-h-[3.8em] sm:min-h-[2.4em] pb-1">
              <ReactTypingEffect
                text={['Smart Solutions to\nSmart People.', 'Cutting Edge\nTechnology.', 'Modern UI/UX\nDesign.']}
                speed={50}
                eraseSpeed={30}
                typingDelay={500}
                eraseDelay={2500}
                cursorRenderer={(cursor) => <span className="text-blue-500 font-light">{cursor}</span>}
                displayTextRenderer={(text) => <span style={{ whiteSpace: 'pre-line', lineHeight: '1.15' }}>{text}</span>}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-neutral-400 text-sm md:text-base font-medium tracking-tight max-w-md mb-8 leading-relaxed"
          >
            If I cannot do great things, I can do small things in a great way.
          </motion.p>

          {/* Action Buttons */}
         <motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.3,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="flex flex-wrap items-center gap-3 md:gap-4"
>
  {/* VIEW CV */}
  <motion.a
    href="https://drive.google.com/file/d/1_BrhJs06yD1BwwCeLDzYvQLggvlN3lEE/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.04, y: -2 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className="group relative overflow-hidden flex items-center gap-2.5 px-6 py-3 md:px-7 md:py-3.5 text-xs md:text-sm font-semibold rounded-full text-white border border-white/15 bg-white/[0.06] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:border-white/25 hover:bg-white/[0.1] hover:shadow-[0_12px_40px_rgba(79,183,179,0.15)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4FB7B3]/50"
  >
    {/* Shine */}
    <span
      className="
        absolute inset-0 -translate-x-[120%]
        bg-gradient-to-r from-transparent via-white/15 to-transparent
        skew-x-12
        group-hover:translate-x-[120%]
        transition-transform duration-700
      "
    />

    {/* Glow */}
    <span
      className="
        absolute -inset-1 rounded-full
        bg-[#4FB7B3]/10
        blur-xl opacity-0
        group-hover:opacity-100
        transition-opacity duration-500
      "
    />

    <span className="relative z-10">View My CV</span>

    <motion.span
      className="relative z-10"
      initial={{ x: 0, y: 0 }}
      whileHover={{ x: 2, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <ExternalLink size={14} strokeWidth={2} />
    </motion.span>
  </motion.a>

  {/* VIEW MY WORK */}
  <motion.button
    onClick={() => {
      const target = document.getElementById("projects");

      if (target) {
        if (window.lenis) {
          window.lenis.scrollTo(target, {
            offset: -85,
            duration: 1.2,
          });
        } else {
          const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            85;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    }}
    whileHover={{ scale: 1.04, y: -2 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className="
      group relative overflow-hidden
      flex items-center gap-2.5
      px-6 py-3 md:px-7 md:py-3.5
      text-xs md:text-sm font-semibold
      rounded-full
      bg-[#111]
      border border-white/10
      text-white
      shadow-[0_8px_25px_rgba(0,0,0,0.2)]
      hover:bg-[#171717]
      hover:border-white/20
      hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]
      transition-all duration-300
      cursor-pointer
      focus:outline-none
      focus:ring-2
      focus:ring-white/20
    "
  >
    {/* Hover background */}
    <span
      className="
        absolute inset-0
        bg-gradient-to-r
        from-white/[0.03]
        via-white/[0.08]
        to-white/[0.03]
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-300
      "
    />

    <span className="relative z-10">
      View My Work
    </span>

    <motion.span
      className="relative z-10"
      initial={{ x: 0 }}
      whileHover={{ x: 5 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
    >
      <FaArrowRight size={13} />
    </motion.span>
  </motion.button>
</motion.div>
        </div>

        {/* RIGHT COLUMN: Minimalist Text Architecture */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-full lg:w-[45%] hidden lg:flex flex-col items-end justify-center relative z-10 select-none pointer-events-none"
        >
          <div className="flex flex-col items-end text-right">
            {/* TEXT UPDATED HERE TO MATCH YOUR SKILLSET */}
            {['DESIGN', 'ENGINEER', 'INNOVATE'].map((text, i) => (
              <h2 key={i} className="text-[65px] xl:text-[85px] font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.07] to-transparent">
                {text}
              </h2>
            ))}
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-blob-1 {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            50% { transform: translate3d(40px, 30px, 0) scale(1.1); }
            100% { transform: translate3d(-20px, -40px, 0) scale(0.95); }
          }
          @keyframes float-blob-2 {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            50% { transform: translate3d(-50px, 20px, 0) scale(1.05); }
            100% { transform: translate3d(30px, -30px, 0) scale(0.9); }
          }
          @keyframes float-blob-3 {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            50% { transform: translate3d(20px, -40px, 0) scale(1.15); }
            100% { transform: translate3d(-30px, 30px, 0) scale(0.95); }
          }
          
          /* Performance adjustment for mobile/low-end devices */
          @media (max-width: 768px) {
            .float-blob-1, .float-blob-2, .float-blob-3 {
              animation-duration: 40s !important;
            }
          }
        `
      }} />
    </section>
  );
};

export default Home;