"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "Python",
    description: "Versatile programming language for web development and automation.",
    useCase: "Web applications, data analysis, and scripting.",
    level: "Intermediate",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "JavaScript",
    description: "Dynamic programming language for interactive web applications.",
    useCase: "Frontend development, DOM manipulation, and web APIs.",
    level: "Learning",
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "React",
    description: "Component-based UI library for building interactive interfaces.",
    useCase: "SPA dashboards, dynamic forms, and reusable UI systems.",
    level: "Intermediate",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "HTML/CSS",
    description: "Fundamental web technologies for structure and styling.",
    useCase: "Website layouts, responsive design, and user interfaces.",
    level: "Intermediate",
    color: "from-pink-500 to-rose-500"
  },
  {
    name: "PHP",
    description: "Server-side scripting language for web development.",
    useCase: "Dynamic websites, content management, and web applications.",
    level: "Learning",
    color: "from-purple-500 to-violet-500"
  },
  {
    name: "Next.js",
    description: "React framework with SSR, SSG, routing, and image optimization.",
    useCase: "SEO-friendly sites, hybrid apps, and fast content platforms.",
    level: "Learning",
    color: "from-gray-500 to-slate-500"
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript that improves reliability.",
    useCase: "Large codebases, SDKs, and refactor-safe enterprise apps.",
    level: "Learning",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Node.js",
    description: "Event-driven runtime for building scalable backends.",
    useCase: "APIs, realtime services, CLI tools, and integrations.",
    level: "Learning",
    color: "from-green-600 to-green-800"
  },
  {
    name: "MySQL",
    description: "Relational database known for reliability and speed.",
    useCase: "Transactional systems, reporting, and BI pipelines.",
    level: "Learning",
    color: "from-orange-500 to-amber-500"
  },
  {
    name: "Git",
    description: "Version control system for tracking code changes.",
    useCase: "Collaborative development, code management, and deployment.",
    level: "Intermediate",
    color: "from-red-500 to-pink-500"
  },
  {
    name: "Web Development",
    description: "Full-stack development of web applications and sites.",
    useCase: "Portfolio sites, e-commerce, and interactive web platforms.",
    level: "Intermediate",
    color: "from-indigo-500 to-purple-500"
  }
];

const categories = [
  {
    title: "Frontend Development",
    skills: ["React", "JavaScript", "HTML/CSS", "Next.js", "TypeScript"],
    color: "from-blue-500 to-cyan-500",
    icon: "🎨"
  },
  {
    title: "Backend Development", 
    skills: ["Python", "PHP", "Node.js", "Express.js"],
    color: "from-green-500 to-emerald-500",
    icon: "⚙️"
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "Git", "Web Development", "API Integration"],
    color: "from-purple-500 to-violet-500",
    icon: "🗄️"
  },
  {
    title: "Development Tools",
    skills: ["VS Code", "GitHub", "Netlify", "Responsive Design"],
    color: "from-orange-500 to-red-500",
    icon: "🛠️"
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            My <span className="code-text">Skills</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
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
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            <span className="code-text">Skill</span> Categories
          </h3>
          
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

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="tech-card p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="code-text">Learning</span> Journey
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  Current Focus
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">JavaScript</span>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Learning</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">React</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Intermediate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Python</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  Notable Projects
                </h4>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium">Google Clone</div>
                    <div className="text-muted">HTML, CSS, JavaScript</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Spotify Clone</div>
                    <div className="text-muted">Music streaming app</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Tic-Tac-Toe Game</div>
                    <div className="text-muted">Interactive JavaScript game</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}