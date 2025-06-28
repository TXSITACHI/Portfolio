"use client"

import { ExternalLink } from "lucide-react"
import { openProject } from "../utils/contactUtils"
import type { Project } from "../types/portfolio"
import "../styles/projects.css"

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => openProject(project.link)}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <ExternalLink className="project-link-icon" />
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
