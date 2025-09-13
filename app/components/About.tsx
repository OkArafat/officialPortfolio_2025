"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Animated Counter Component
function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = "", 
  delay = 0 
}: { 
  end: number; 
  duration?: number; 
  suffix?: string; 
  delay?: number; 
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = Date.now();
          const startValue = 0;
          const endValue = end;
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
            
            setCount(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          setTimeout(animate, delay * 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, delay, hasAnimated]);

  return (
    <span ref={counterRef} className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-black dark:to-indigo-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-l from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Get to know me better and discover my journey in technology and leadership
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
      <motion.div
            initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Status Badge */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="flex items-center gap-2 px-4 py-2 glass-card">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">Available</span>
                </div>
              </div>

              {/* Profile Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 p-2 rounded-3xl shadow-2xl">
                  <img
                    src="/arafat.jpg"
                    alt="Arafat Haque Biswas"
                    className="w-full h-auto rounded-2xl object-cover aspect-[4/5]"
          style={{
            objectPosition: "center top",
          }}
        />
                </div>
              </div>
            </div>
      </motion.div>

          {/* Content */}
      <motion.div
            initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Introduction */}
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl font-bold"
              >
                Hi, I&apos;m <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Arafat Haque Biswas</span>
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  A passionate Computer Science student at BRAC University with hands-on experience in 
                  <span className="text-purple-600 dark:text-purple-400 font-semibold"> web development</span> and 
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> IT support</span>. 
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Currently serving as <span className="text-green-600 dark:text-green-400 font-semibold">IT Support Officer</span> at ATMA BISWAS NGO, developing websites and delivering ICT education to empower communities.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-2 gap-6 pt-6"
              >
                <div className="text-center p-6 modern-card">
                  <AnimatedCounter end={4} duration={1.5} suffix="+" delay={0.5} />
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Years Experience</div>
                </div>
                <div className="text-center p-6 modern-card">
                  <AnimatedCounter end={150} duration={2} suffix="+" delay={0.7} />
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Students Taught</div>
                </div>
                <div className="text-center p-6 modern-card">
                  <AnimatedCounter end={8} duration={1.8} suffix="+" delay={0.9} />
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Projects</div>
                </div>
                <div className="text-center p-6 modern-card">
                  <AnimatedCounter end={2} duration={1.2} delay={1.1} />
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Leadership Roles</div>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
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
                className="modern-button inline-flex items-center justify-center gap-2"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="/My_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Arafat_Haque_Biswas_CV.pdf"
                className="modern-button-secondary inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Education & Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="modern-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Education</h4>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h5 className="font-semibold text-gray-900 dark:text-white">BSc Computer Science</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">BRAC University, Dhaka</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">2022–2026</p>
                </div>
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h5 className="font-semibold text-gray-900 dark:text-white">Business Administration</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Alison & Open University</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Online Diploma</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="modern-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h4>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white">IT Support Officer</h5>
                    <span className="text-xs text-gray-500 dark:text-gray-400">2022–2026</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ATMA BISWAS NGO, Dhaka</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Website development & IT support</p>
                </div>
                <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-gray-900 dark:text-white">Club Secretary</h5>
                    <span className="text-xs text-gray-500 dark:text-gray-400">2024–Present</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">BRAC University Cultural Club</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Leadership & website development</p>
            </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
    </section>
  );
}