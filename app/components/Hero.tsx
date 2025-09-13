"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Hero() {
  const roles = useMemo(
    () => [
      "IT Support Officer",
      "Web Developer", 
      "ICT Instructor",
      "Club Secretary",
    ],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIndex % roles.length] + ".....";
    const step = () => {
      if (!deleting) {
        const next = full.slice(0, display.length + 1);
        setDisplay(next);
        if (next === full) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        const next = full.slice(0, Math.max(0, display.length - 1));
        setDisplay(next);
        if (next.length === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    };
    const delay = deleting ? 50 : 90;
    const t = setTimeout(step, delay);
    return () => clearTimeout(t);
  }, [display, deleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-purple-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="block text-gray-900 dark:text-white">Hi, I&apos;m</span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Arafat
            </span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8"
          >
            <span className="text-gray-600 dark:text-gray-400">I&apos;m a </span>
            <span className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              {display}
              <span className="animate-pulse text-purple-500">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Computer Science student at BRAC University with hands-on experience in{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">web development</span> and{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">IT support</span>. 
              Currently serving as IT Support Officer at ATMA BISWAS NGO, developing websites and empowering communities through technology.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 font-medium">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WordPress', 'Python', 'React', 'Git'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 glass-card text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('projects');
                if (targetElement) {
                  const navbarHeight = 100;
                  const elementPosition = targetElement.offsetTop - navbarHeight;
                  window.scrollTo({
                    top: Math.max(0, elementPosition),
                    behavior: "smooth"
                  });
                }
              }}
              className="modern-button inline-flex items-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="https://github.com/OkArafat"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button-secondary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500">
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}