import React, { useState, useRef, useEffect } from "react";
import {
  FaPaperPlane,
  FaTimes,
  FaTrashAlt,
  FaVolumeUp,
  FaVolumeMute,
  FaRobot,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SkillsInfo, projects, experiences, education } from "../../constants";

/* ---------------- SOUND ---------------- */
const sendSound = new Audio(
  "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
);
const receiveSound = new Audio(
  "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav"
);

const PatraAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [showButton, setShowButton] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const messagesEndRef = useRef(null);
  const scrollTimer = useRef(null);

  /* ---------------- AUTO HIDE BUTTON ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(false);
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setShowButton(true), 700);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- SCROLL RING ---------------- */
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  /* ---------------- MESSAGES ---------------- */
  const [messages, setMessages] = useState([
    {
      id: 1,
      text:
        "Hi 👋<br/><br/>I’m <b>Patra AI</b>.<br/>Ask me about <b>Projects</b>, <b>Skills</b>, <b>Experience</b>, or <b>Education</b>.",
      sender: "bot",
    },
  ]);

  const playSound = (type) => {
    if (!soundEnabled) return;
    const sound = type === "send" ? sendSound : receiveSound;
    sound.currentTime = 0;
    sound.play().catch(() => {});
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  /* ---------------- AI RESPONSE ---------------- */
  const generateResponse = (input) => {
    const q = input.toLowerCase().trim();

    if (/^(hi|hii+|hello+|hey+)$/.test(q)) {
      return "Hello 👋😊<br/>Ask about <b>Projects</b>, <b>Skills</b>, <b>Education</b>, or <b>Experience</b>.";
    }

    if (q.includes("project")) {
      return projects.map((p) => `• <b>${p.title}</b>`).join("<br/>");
    }

    if (q.includes("skill")) {
      return SkillsInfo.map(
        (s) => `<b>${s.title}</b>: ${s.skills.map((x) => x.name).join(", ")}`
      ).join("<br/><br/>");
    }

    if (q.includes("education")) {
      return education
        .map((e) => `🎓 <b>${e.degree}</b> — ${e.school}`)
        .join("<br/>");
    }

    if (q.includes("experience")) {
      return experiences
        .map((e) => `💼 <b>${e.role}</b> at ${e.company}`)
        .join("<br/>");
    }

    return "🤖 I didn’t understand that.<br/>Try <b>Projects</b>, <b>Skills</b>, <b>Education</b>, or <b>Experience</b> 🙂";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    playSound("send");

    const userMsg = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };

    setMessages((p) => [...p, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((p) => [
        ...p,
        {
          id: Date.now() + 1,
          text: generateResponse(userMsg.text),
          sender: "bot",
        },
      ]);
      setIsTyping(false);
      playSound("receive");
    }, 1000);
  };

  return (
    <>
      {/* ================= PREMIUM FLOATING AI BUTTON ================= */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-8 right-8 z-[9999]"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="
                group relative flex items-center justify-center
                w-16 h-16 rounded-full
                bg-[#0a0a0a]/90 backdrop-blur-xl
                shadow-[0_0_45px_rgba(139,92,246,0.45)]
                transition-all duration-300 hover:scale-110
                border border-white/10
              "
            >
              {/* Rotating Ring */}
              <div
                className="absolute inset-1 rounded-full border border-dashed border-violet-500/30"
                style={{ animation: "spin 10s linear infinite" }}
              />

              {/* Progress Ring */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 p-1"
                viewBox="0 0 60 60"
              >
                <circle
                  cx="30"
                  cy="30"
                  r={radius}
                  fill="transparent"
                  stroke="#1f2937"
                  strokeWidth="4"
                />
                <circle
                  cx="30"
                  cy="30"
                  r={radius}
                  fill="transparent"
                  stroke="#8b5cf6"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="drop-shadow-[0_0_15px_#8b5cf6]"
                />
              </svg>

              {/* Center */}
              <div className="
                absolute inset-0 m-auto w-10 h-10 rounded-full
                bg-violet-900/20 backdrop-blur-xl
                flex items-center justify-center overflow-hidden
              ">
                <span className="
                  text-[10px] font-bold font-mono text-violet-400
                  absolute transition-transform duration-300
                  group-hover:-translate-y-8
                ">
                  AI
                </span>

                <FaRobot
                  size={18}
                  className="
                    text-white absolute translate-y-8
                    transition-transform duration-300
                    group-hover:translate-y-0
                  "
                />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CHAT WINDOW ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="
              fixed bottom-28 right-8 z-[9999]
              w-[92vw] sm:w-[380px] h-[70vh]
              flex flex-col overflow-hidden
              rounded-3xl bg-white/20 dark:bg-black/30
              backdrop-blur-2xl border border-white/20 shadow-2xl
            "
          >
            {/* HEADER */}
            <div className="
              flex items-center justify-between px-4 py-3
              bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-fuchsia-500/40
              border-b border-white/20 text-white
            ">
              <div className="flex items-center gap-2 font-semibold">
                <FaRobot /> Patra AI
              </div>
              <div className="flex gap-3">
                <button onClick={() => setSoundEnabled(!soundEnabled)}>
                  {soundEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
                </button>
                <button onClick={() => setMessages([])}>
                  <FaTrashAlt />
                </button>
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      px-4 py-2.5 text-sm rounded-2xl max-w-[78%]
                      ${
                        m.sender === "user"
                          ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                          : "bg-white/30 dark:bg-white/10 text-gray-900 dark:text-white border border-white/20"
                      }
                    `}
                    dangerouslySetInnerHTML={{ __html: m.text }}
                  />
                </div>
              ))}
              {isTyping && (
                <div className="text-xs text-white/60">
                  Patra AI is typing…
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="
              p-3 flex gap-2
              bg-white/20 dark:bg-black/20
              border-t border-white/20
            ">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask something..."
                className="
                  flex-1 px-4 py-2 rounded-full
                  bg-white/30 dark:bg-white/10
                  text-gray-900 dark:text-white outline-none
                "
              />
              <button
                onClick={handleSendMessage}
                className="
                  p-3 rounded-full
                  bg-gradient-to-br from-indigo-500 to-purple-600
                  text-white shadow-lg
                "
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PatraAI;
