"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    desc: "A modern dashboard built with Next.js.",
    img: "https://picsum.photos/800/600?random=1",
    github: "https://github.com/OkArafat/project-alpha",
    live: "https://project-alpha-demo.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Project Beta",
    desc: "Marketing site with delightful animations.",
    img: "https://picsum.photos/800/600?random=2",
    github: "https://github.com/OkArafat/project-beta",
    live: "https://project-beta-demo.vercel.app",
    tech: ["React", "Framer Motion", "CSS"],
  },
  {
    id: 3,
    title: "Project Gamma",
    desc: "Ecommerce prototype with clean UX.",
    img: "https://picsum.photos/800/600?random=3",
    github: "https://github.com/OkArafat/project-gamma",
    live: "https://project-gamma-demo.vercel.app",
    tech: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    desc: "Personal portfolio built with Next.js and modern design.",
    img: "https://picsum.photos/800/600?random=4",
    github: "https://github.com/OkArafat/portfolio",
    live: "https://arafat-haque-biswas.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 5,
    title: "Task Management App",
    desc: "Full-stack task management application with real-time updates.",
    img: "https://picsum.photos/800/600?random=5",
    github: "https://github.com/OkArafat/task-manager",
    live: "https://task-manager-demo.vercel.app",
    tech: ["React", "Express.js", "Socket.io", "PostgreSQL"],
  },
  {
    id: 6,
    title: "Weather Dashboard",
    desc: "Beautiful weather app with location-based forecasts.",
    img: "https://picsum.photos/800/600?random=6",
    github: "https://github.com/OkArafat/weather-app",
    live: "https://weather-dashboard-demo.vercel.app",
    tech: ["React", "OpenWeather API", "Chart.js"],
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const remainingCount = projects.length - 3;

  const handleViewMore = async () => {
    if (showAll) {
      // If showing all, scroll to top of projects section
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setShowAll(false);
    } else {
      // If showing limited, load more projects
      setIsLoading(true);
      // Simulate loading delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 500));
      setShowAll(true);
      setIsLoading(false);
    }
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />

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
            My <span className="code-text">Projects</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            A collection of projects that showcase my skills and passion for web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="responsive-grid">
          <AnimatePresence>
            {visibleProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="tech-card group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background =
                          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)";
                      }
                    }}
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tech-card p-3 hover:scale-110 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tech-card p-3 hover:scale-110 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="tech-card px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 modern-btn py-2 text-center text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 tech-card py-2 text-center text-sm font-semibold hover:scale-105 transition-transform"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={handleViewMore}
            disabled={isLoading}
            className="tech-card px-8 py-4 font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                <span>Loading...</span>
              </div>
            ) : showAll ? (
              <div className="flex items-center gap-2">
                <span>Show Less</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>View More ({remainingCount} more)</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            )}
          </button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="tech-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-muted mb-6">
              I'm always excited to collaborate on new projects and bring ideas to life.
            </p>
            <a
              href="#contact"
              className="modern-btn px-8 py-3 inline-block"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
