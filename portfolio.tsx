"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Rocket,
  Star,
  Calendar,
  Award,
} from "lucide-react"

export default function Component() {
  const [activeSection, setActiveSection] = useState("about")

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    Backend: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    "Tools & Others": ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
  }

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of responsive web applications using React and Next.js. Improved performance by 40% and user engagement by 25%.",
      achievements: [
        "Built 15+ production applications",
        "Mentored 3 junior developers",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed end-to-end web solutions for clients across various industries. Specialized in React, Node.js, and cloud deployment.",
      achievements: ["Delivered 20+ client projects", "Reduced load times by 50%", "Integrated payment systems"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Started career building responsive websites and learning modern development practices. Focused on frontend technologies and user experience.",
      achievements: ["Completed 10+ projects", "Learned React ecosystem", "Improved code quality"],
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com/johndeveloper/ecommerce-platform",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      link: "https://github.com/johndeveloper/task-management-app",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, charts, and weather alerts.",
      tech: ["React", "Chart.js", "Weather API", "Tailwind"],
      link: "https://github.com/johndeveloper/weather-dashboard",
    },
  ]

  // Contact information
  const contactInfo = {
    email: "aayushdev50@gmail.com",
    phone: "+977 9862893024",
    location: "Duhabi-8, Sunsari",
    github: "https://github.com/TXSITACHI",
    linkedin: "https://www.linkedin.com/in/aayush-dev-044374305/",
  }

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Download CV function
  const downloadCV = () => {
    // Create a sample CV content (you can replace this with your actual CV file)
    const cvContent = `
JOHN DEVELOPER
Full Stack Developer

CONTACT INFORMATION
Email: ${contactInfo.email}
Phone: ${contactInfo.phone}
Location: ${contactInfo.location}
GitHub: ${contactInfo.github}
LinkedIn: ${contactInfo.linkedin}

EXPERIENCE
Senior Frontend Developer - Tech Solutions Inc. (2022 - Present)
• Led development of responsive web applications using React and Next.js
• Improved performance by 40% and user engagement by 25%
• Built 15+ production applications
• Mentored 3 junior developers
• Implemented CI/CD pipelines

Full Stack Developer - Digital Agency Co. (2020 - 2022)
• Developed end-to-end web solutions for clients across various industries
• Specialized in React, Node.js, and cloud deployment
• Delivered 20+ client projects
• Reduced load times by 50%
• Integrated payment systems

Junior Developer - StartUp Ventures (2019 - 2020)
• Started career building responsive websites and learning modern development practices
• Focused on frontend technologies and user experience
• Completed 10+ projects
• Learned React ecosystem
• Improved code quality

TECHNICAL SKILLS
Frontend: React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript
Backend: Node.js, Express, Python, Django, REST APIs, GraphQL
Database: MongoDB, PostgreSQL, MySQL, Redis
Tools & Others: Git, Docker, AWS, Vercel, Figma, VS Code

PROJECTS
E-Commerce Platform - Full-stack e-commerce solution with payment integration
Task Management App - Collaborative project management tool with real-time updates
Weather Dashboard - Interactive weather application with location-based forecasts
    `

    const blob = new Blob([cvContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "John_Developer_CV.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  // Get in touch function
  const getInTouch = () => {
    const subject = "Let's work together!"
    const body = "Hi John,\n\nI'd like to discuss a potential project with you.\n\nBest regards,"
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink)
  }

  // Social media functions
  const openGitHub = () => {
    window.open(contactInfo.github, "_blank")
  }

  const openLinkedIn = () => {
    window.open(contactInfo.linkedin, "_blank")
  }

  const openEmail = () => {
    const mailtoLink = `mailto:${contactInfo.email}`
    window.open(mailtoLink)
  }

  // Open project repository
  const openProject = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 via-pink-900 to-cyan-900">
      {/* Animated background overlay */}
      <div className="fixed inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["about", "skills", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 px-4 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            John{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={downloadCV}
              className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={getInTouch}
              className="border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-xl shadow-purple-500/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    I'm a passionate Full Stack Developer with 5+ years of experience creating digital solutions that
                    make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source
                    projects, or sharing knowledge with the developer community.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-xl shadow-cyan-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-white">{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span className="text-white">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-pink-400 mr-3" />
                    <span className="text-white">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-white">Available for freelance</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={openGitHub}
                  className="border-white/30 text-white bg-white/10 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 backdrop-blur-sm"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={openLinkedIn}
                  className="border-white/30 text-white bg-white/10 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 backdrop-blur-sm"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={openEmail}
                  className="border-white/30 text-white bg-white/10 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-cyan-500/20 backdrop-blur-sm"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 bg-black/20 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Tech Stack</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={category}
                className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                style={{
                  boxShadow: `0 10px 30px ${
                    index === 0
                      ? "rgba(34, 211, 238, 0.15)"
                      : index === 1
                        ? "rgba(168, 85, 247, 0.15)"
                        : index === 2
                          ? "rgba(236, 72, 153, 0.15)"
                          : "rgba(34, 197, 94, 0.15)"
                  }`,
                }}
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Code
                      className={`w-5 h-5 mr-2 ${
                        index === 0
                          ? "text-cyan-400"
                          : index === 1
                            ? "text-purple-400"
                            : index === 2
                              ? "text-pink-400"
                              : "text-green-400"
                      }`}
                    />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-cyan-400/30 text-cyan-300 hover:text-pink-300 hover:border-pink-400/30 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 text-lg font-semibold">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex items-center text-white/70 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.period}
                    </div>
                  </div>

                  <p className="text-white/90 mb-6 leading-relaxed">{job.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-white font-semibold flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/80 flex items-center">
                          <Star className="w-3 h-3 mr-2 text-yellow-400" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 bg-black/20 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 group shadow-xl hover:shadow-2xl cursor-pointer"
                onClick={() => openProject(project.link)}
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:text-pink-400 transition-colors duration-300" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-cyan-400/30 text-cyan-300 hover:text-pink-300 hover:border-pink-400/30 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-white/80">{contactInfo.email}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-white/80">{contactInfo.phone}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-white/80">{contactInfo.location}</p>
              </CardContent>
            </Card>
          </div>

          <Button
            size="lg"
            onClick={getInTouch}
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Start a Project
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/20 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/70">© 2024 Aayush Dev. Built with React & Next.js</p>
        </div>
      </footer>
    </div>
  )
}
