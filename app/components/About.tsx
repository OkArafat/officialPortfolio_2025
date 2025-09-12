"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="code-text">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl transform rotate-6 opacity-20" />
              <div className="relative tech-card p-2 rounded-3xl">
                <Image
                  src="/arafat.jpg"
                  alt="Arafat Haque Biswas"
                  width={500}
                  height={600}
                  className="object-cover rounded-2xl w-full h-auto"
                  style={{
                    objectPosition: "center top",
                  }}
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 tech-card p-4 rounded-2xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 tech-card p-4 rounded-2xl">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm font-medium">4+ Projects</span>
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
              <h3 className="text-2xl sm:text-3xl font-bold">
                Hi, I'm <span className="code-text">Arafat Haque Biswas</span>
              </h3>
              <p className="text-lg text-muted leading-relaxed">
                A passionate Computer Science student at BRAC University, Bangladesh. I love creating 
                <span className="code-text font-semibold"> digital solutions</span> that make a difference. 
                From building web applications to developing games, I enjoy every aspect of the development process.
              </p>
            </div>

            {/* Education Card */}
            <div className="tech-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Computer Science & Engineering</h4>
                  <p className="text-muted">BRAC University, Bangladesh</p>
                  <p className="text-sm text-muted mt-1">Currently pursuing my Bachelor's degree</p>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {['Python', 'JavaScript', 'React', 'HTML/CSS', 'PHP', 'Git'].map((skill, index) => (
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

            {/* Projects Highlight */}
            <div className="tech-card p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Notable Projects
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-medium">Google Clone</p>
                  <p className="text-sm text-muted">HTML, CSS, JavaScript</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Spotify Clone</p>
                  <p className="text-sm text-muted">Music streaming app</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Tic-Tac-Toe Game</p>
                  <p className="text-sm text-muted">Interactive JavaScript game</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Snake Game</p>
                  <p className="text-sm text-muted">Classic game implementation</p>
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
