"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "", delay = 0 }: { end: number; duration?: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const timer = setTimeout(() => {
              setIsVisible(true);
            }, delay * 1000);

            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [counterRef, delay, hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <span 
      ref={counterRef} 
      className={`text-2xl font-bold text-foreground transition-all duration-300 ${
        isVisible ? 'scale-110' : 'scale-100'
      }`}
    >
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-8"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Get to know me better and discover my journey in technology and leadership
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
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
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-500">Available</span>
                </div>
              </div>
              
              {/* Main Image Container */}
              <div className="relative">
                {/* Subtle Background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <Image
                    src="/arafat.jpg"
                    alt="Arafat Haque Biswas"
                    width={500}
                    height={600}
                    className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
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
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            {/* Introduction */}
            <div className="space-y-4 sm:space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold"
              >
                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Arafat Haque Biswas</span>
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg text-muted leading-relaxed">
                  A passionate Computer Science student at BRAC University with hands-on experience in 
                  <span className="text-blue-400 font-semibold"> web development</span> and 
                  <span className="text-purple-400 font-semibold"> IT support</span>. 
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  Currently serving as <span className="text-green-400 font-semibold">IT Support Officer</span> at ATMA BISWAS NGO, developing websites and delivering ICT education to empower communities.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 pt-6"
              >
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                  <AnimatedCounter end={4} duration={1.5} suffix="+" delay={0.5} />
                  <div className="text-xs sm:text-sm text-muted mt-2">Years Experience</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                  <AnimatedCounter end={150} duration={2} suffix="+" delay={0.7} />
                  <div className="text-xs sm:text-sm text-muted mt-2">Students Taught</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <AnimatedCounter end={8} duration={1.8} suffix="+" delay={0.9} />
                  <div className="text-xs sm:text-sm text-muted mt-2">Projects</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                  <AnimatedCounter end={2} duration={1.2} delay={1.1} />
                  <div className="text-xs sm:text-sm text-muted mt-2">Leadership Roles</div>
                </div>
              </motion.div>
            </div>

            {/* Education Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-5 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/40 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold group-hover:text-blue-300 transition-colors duration-300">BSc Computer Science</h4>
                </div>
                <p className="text-sm text-muted group-hover:text-blue-200 transition-colors duration-300">BRAC University, Dhaka</p>
                <p className="text-xs text-muted mt-1 group-hover:text-blue-200 transition-colors duration-300">2022–2026</p>
              </div>

              <div className="p-4 sm:p-5 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-500/40 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold group-hover:text-green-300 transition-colors duration-300">Business Administration</h4>
                </div>
                <p className="text-sm text-muted group-hover:text-green-200 transition-colors duration-300">Alison & Open University</p>
                <p className="text-xs text-muted mt-1 group-hover:text-green-200 transition-colors duration-300">Online Diploma</p>
              </div>

              {/* Additional Certificates */}
              <div className="p-4 sm:p-5 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500/40 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold group-hover:text-cyan-300 transition-colors duration-300">Leadership & Followership</h4>
                </div>
                <p className="text-sm text-muted group-hover:text-cyan-200 transition-colors duration-300">The Open University</p>
                <p className="text-xs text-muted mt-1 group-hover:text-cyan-200 transition-colors duration-300">Dec 2024 - Jan 2025 • 74%</p>
              </div>

              <div className="p-4 sm:p-5 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-500/20 hover:from-pink-500/20 hover:to-purple-500/20 hover:border-pink-500/40 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold group-hover:text-pink-300 transition-colors duration-300">Strategic Management</h4>
                </div>
                <p className="text-sm text-muted group-hover:text-pink-200 transition-colors duration-300">The Open University</p>
                <p className="text-xs text-muted mt-1 group-hover:text-pink-200 transition-colors duration-300">Nov 2024 - Jan 2025 • 92%</p>
              </div>
            </div>

            {/* Work Experience */}
            <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold group-hover:text-purple-300 transition-colors duration-300">Professional Experience</h4>
              </div>
              <div className="space-y-4">
                <div className="p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-purple-500/30 hover:scale-105 hover:shadow-md hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer group/item">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-foreground group-hover/item:text-purple-300 transition-colors duration-300">IT Support Officer</h5>
                    <span className="text-xs text-muted group-hover/item:text-purple-200 transition-colors duration-300">2022–2026</span>
                  </div>
                  <p className="text-sm text-muted group-hover/item:text-purple-200 transition-colors duration-300">ATMA BISWAS NGO, Dhaka</p>
                  <p className="text-xs text-muted mt-1 group-hover/item:text-purple-200 transition-colors duration-300">Website development & IT support</p>
                </div>
                <div className="p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-pink-500/30 hover:scale-105 hover:shadow-md hover:shadow-pink-500/10 transition-all duration-300 cursor-pointer group/item">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-foreground group-hover/item:text-pink-300 transition-colors duration-300">Club Secretary</h5>
                    <span className="text-xs text-muted group-hover/item:text-pink-200 transition-colors duration-300">2024–Present</span>
                  </div>
                  <p className="text-sm text-muted group-hover/item:text-pink-200 transition-colors duration-300">BRAC University Cultural Club (BUCuC)</p>
                  <p className="text-xs text-muted mt-1 group-hover/item:text-pink-200 transition-colors duration-300">Leadership & website development</p>
                </div>
                <div className="p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer group/item">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-foreground group-hover/item:text-cyan-300 transition-colors duration-300">ICT Instructor</h5>
                    <span className="text-xs text-muted group-hover/item:text-cyan-200 transition-colors duration-300">2023</span>
                  </div>
                  <p className="text-sm text-muted group-hover/item:text-cyan-200 transition-colors duration-300">BRAC Education (Srijon Project)</p>
                  <p className="text-xs text-muted mt-1 group-hover/item:text-cyan-200 transition-colors duration-300">Taught 150+ students</p>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Technical Skills</h4>
              <div className="flex flex-wrap gap-3">
                {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WordPress', 'Python', 'Git', 'MySQL', 'React'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="tech-card px-4 py-2 text-sm font-medium hover:scale-105 transition-transform"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="tech-card p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certifications & Achievements
              </h4>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-foreground">Certificate of Acknowledgement</h5>
                  <p className="text-sm text-muted">bKash Limited & The Daily Star, Newspaper Olympiad Season 4</p>
                  <p className="text-sm text-muted">Dec 2024 – Aug 2025</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-foreground">Volunteer, Team Academics</h5>
                  <p className="text-sm text-muted">Newspaper Olympiad Season 4</p>
                  <p className="text-sm text-muted">Dec 2024 – Aug 2025</p>
                </div>
              </div>
            </div>

            {/* Projects Highlight */}
            <div className="tech-card p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Projects
              </h4>
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="font-medium">NGO Website Development</p>
                  <p className="text-sm text-muted">atmabiswas.org using WordPress and custom JavaScript</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Web UI Clones</p>
                  <p className="text-sm text-muted">Google, Spotify, and YouTube Music UI clones</p>
                </div>
                  <div className="space-y-1">
                    <p className="font-medium">University Projects</p>
                    <p className="text-sm text-muted">BRAC University Cultural Club website and Discord bot (Completed)</p>
                  </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="modern-btn px-6 py-3 text-center"
              >
                View My Work
              </a>
              <a
                href="/My_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Arafat_Haque_Biswas_CV.pdf"
                className="tech-card px-6 py-3 text-center font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
