"use client"

import { useState } from "react"
import Navigation from "./Navigation"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import ExperienceSection from "./ExperienceSection"
import ProjectsSection from "./ProjectsSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import { contactInfo } from "../data/contactInfo"
import { skills } from "../data/skills"
import { experience } from "../data/experience"
import { projects } from "../data/projects"
import "../styles/portfolio.css"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="portfolio-container">
      <div className="background-overlay"></div>

      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      <HeroSection contactInfo={contactInfo} />
      <AboutSection contactInfo={contactInfo} />
      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <ContactSection contactInfo={contactInfo} />
      <Footer />
    </div>
  )
}
