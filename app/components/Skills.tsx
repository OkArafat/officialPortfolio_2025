"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML5",
    description: "Modern markup language for creating structured web content.",
    useCase: "Website structure, semantic markup, and accessibility.",
    level: "Advanced",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "CSS3",
    description: "Advanced styling language with animations and responsive design.",
    useCase: "Responsive layouts, animations, and modern UI design.",
    level: "Advanced",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "JavaScript",
    description: "Dynamic programming language for interactive web applications.",
    useCase: "DOM manipulation, web APIs, and interactive features.",
    level: "Intermediate",
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "PHP",
    description: "Server-side scripting language for web development.",
    useCase: "NGO website development, dynamic content, and server logic.",
    level: "Intermediate",
    color: "from-purple-500 to-violet-500"
  },
  {
    name: "WordPress",
    description: "Popular CMS for building and managing websites.",
    useCase: "NGO website (atmabiswas.org), content management, and customization.",
    level: "Intermediate",
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Python",
    description: "Versatile programming language for various applications.",
    useCase: "Web development, automation, and data processing.",
    level: "Learning",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Git",
    description: "Version control system for tracking code changes.",
    useCase: "Collaborative development, code management, and deployment.",
    level: "Intermediate",
    color: "from-red-500 to-pink-500"
  },
  {
    name: "MySQL",
    description: "Relational database management system.",
    useCase: "Data storage, website backends, and information management.",
    level: "Learning",
    color: "from-orange-500 to-amber-500"
  },
  {
    name: "React",
    description: "Component-based UI library for building interfaces.",
    useCase: "Interactive web applications and modern UI development.",
    level: "Learning",
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "ICT Education",
    description: "Teaching and training in Information and Communication Technology.",
    useCase: "Delivering lessons to 150+ students, curriculum development.",
    level: "Advanced",
    color: "from-green-600 to-teal-600"
  },
  {
    name: "Project Management",
    description: "Coordinating and leading creative campaigns and events.",
    useCase: "Club leadership, event coordination for 300+ students.",
    level: "Intermediate",
    color: "from-indigo-500 to-purple-500"
  }
];

const categories = [
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "WordPress"],
    color: "from-blue-500 to-cyan-500",
    icon: "🎨"
  },
  {
    title: "Programming & Tools", 
    skills: ["Python", "React", "Git", "MySQL"],
    color: "from-green-500 to-emerald-500",
    icon: "⚙️"
  },
  {
    title: "Education & Leadership",
    skills: ["ICT Education", "Project Management", "Team Coordination"],
    color: "from-purple-500 to-violet-500",
    icon: "👨‍🏫"
  },
  {
    title: "Professional Experience",
    skills: ["IT Support", "Website Development", "NGO Management"],
    color: "from-orange-500 to-red-500",
    icon: "💼"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mb-20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="grid grid-cols-8 gap-4">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              ))}
            </div>
          </div>

          <div className="relative text-center">
            {/* Tech Stack Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect mb-8 border border-blue-500/20"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-30" />
              </div>
              <span className="text-sm font-semibold tracking-wide uppercase">Tech Stack</span>
            </motion.div>

            {/* Main Title with Better Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                  <span className="block text-foreground/90">My</span>
                  <span className="block relative mt-2">
                    <span className="code-text relative z-10">Skills</span>
                    {/* Decorative underline */}
                    <div className="absolute bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-sm" />
                  </span>
                </h2>
              </div>
              
              {/* Enhanced Subtitle */}
              <div className="max-w-5xl mx-auto">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed"
                >
                  <span className="text-foreground">Technologies & tools I use to build</span>
                  <br />
                  <span className="code-text font-bold">amazing digital experiences</span>
                </motion.p>
              </div>
            </motion.div>

            {/* Tech Preview with Better Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
            >
              <div className="flex flex-wrap justify-center items-center gap-6">
                {/* Left decorative line */}
                <div className="hidden sm:block h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-16" />
                
                {/* Tech tags */}
                <div className="flex flex-wrap justify-center gap-3">
                  {['React', 'JavaScript', 'Python', 'Next.js', 'TypeScript', 'Node.js'].map((tech, index) => (
                <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="tech-card px-4 py-2 text-sm font-mono border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group-hover:scale-105">
                        <span className="relative z-10">{tech}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
        </div>

                {/* Right decorative line */}
                <div className="hidden sm:block h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-16" />
        </div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse" />
            <div className="absolute top-1/3 right-16 w-3 h-3 bg-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-cyan-500/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-green-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
        <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="tech-card group p-6 hover:scale-105 transition-transform"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full dark:bg-green-900/30 dark:text-green-300">
                    {skill.level}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted">
                    <span className="font-medium">Use case:</span> {skill.useCase}
                  </p>
            </div>
          </div>
        </motion.div>
          ))}
        </div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Categories</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="code-text">Skill</span> Categories
            </h3>
            
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Organized by development areas and expertise levels
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="tech-card p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-2xl`}>
                    {category.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{category.title}</h4>
                    <p className="text-sm text-muted">{category.skills.length} technologies</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                  <span
                      key={skillIndex}
                      className="tech-card px-3 py-1 text-sm font-medium hover:scale-105 transition-transform cursor-pointer"
                  >
                    {skill}
                  </span>
                  ))}
            </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Progress</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="code-text">Learning</span> Journey
            </h3>
            
            <p className="text-lg text-muted max-w-2xl mx-auto">
              My current focus areas and project achievements
            </p>
        </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Focus */}
      <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="tech-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Current Focus</h4>
                  <p className="text-muted">Skills I&apos;m actively developing</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { skill: "HTML5", level: "Advanced", color: "from-orange-500 to-red-500", progress: 90 },
                  { skill: "CSS3", level: "Advanced", color: "from-blue-500 to-cyan-500", progress: 88 },
                  { skill: "JavaScript", level: "Intermediate", color: "from-yellow-500 to-orange-500", progress: 75 },
                  { skill: "PHP", level: "Intermediate", color: "from-purple-500 to-violet-500", progress: 80 }
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{item.skill}</span>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                        {item.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                      />
                </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Notable Projects */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="tech-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Notable Projects</h4>
                  <p className="text-muted">My recent achievements</p>
        </div>
              </div>

              <div className="space-y-4">
                {[
                  { 
                    name: "NGO Website", 
                    description: "atmabiswas.org - WordPress & PHP", 
                    status: "Completed",
                    color: "from-blue-500 to-indigo-500"
                  },
                  { 
                    name: "Web UI Clones", 
                    description: "Google, Spotify, YouTube Music", 
                    status: "Completed",
                    color: "from-green-500 to-emerald-500"
                  },
                  { 
                    name: "ICT Education", 
                    description: "150+ students trained", 
                    status: "Completed",
                    color: "from-purple-500 to-pink-500"
                  },
                  { 
                    name: "University Projects", 
                    description: "Cultural Club website & Discord bot", 
                    status: "Completed",
                    color: "from-green-500 to-emerald-500"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="tech-card p-4 hover:scale-105 transition-transform cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-bold text-foreground mb-1">{project.name}</h5>
                        <p className="text-sm text-muted mb-2">{project.description}</p>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full`} />
                          <span className="text-xs font-medium text-green-600 dark:text-green-400">
                            {project.status}
                          </span>
              </div>
            </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center ml-4`}>
                        <span className="text-white font-bold text-lg">
                          {project.name.charAt(0)}
                        </span>
              </div>
            </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        </div>
    </section>
  );
}