"use client"

import { MapPin, Mail, Phone, Briefcase, Github, Linkedin } from "lucide-react"
import { openGitHub, openLinkedIn, openEmail } from "../utils/contactUtils"
import type { ContactInfo } from "../types/portfolio"
import "../styles/about.css"

interface AboutSectionProps {
  contactInfo: ContactInfo
}

export default function AboutSection({ contactInfo }: AboutSectionProps) {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-content">
            <div className="card">
              <h3 className="card-title">Who I Am</h3>
              <p className="card-text">
I'm a UI/UX and Frontend Developer with a strong interest in designing clean, user-friendly interfaces that solve real-world problems. I recently interned as a Web Developer at Government of Nepal, where I worked on web-based solutions and gained hands-on experience in IT operations and development within a public sector environment.
When I'm not designing or coding, I enjoy learning about new design trends, exploring front-end tools, and connecting with the developer and design community to share ideas and grow together.
              </p>
              <p className="card-text">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="about-info">
            <div className="card contact-card">
              <div className="contact-item">
                <MapPin className="contact-icon cyan" />
                <span>{contactInfo.location}</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon purple" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon pink" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="contact-item">
                <Briefcase className="contact-icon cyan" />
                <span>Available for freelance</span>
              </div>
            </div>

            <div className="social-buttons">
              <button onClick={() => openGitHub(contactInfo.github)} className="social-btn">
                <Github className="social-icon" />
              </button>
              <button onClick={() => openLinkedIn(contactInfo.linkedin)} className="social-btn">
                <Linkedin className="social-icon" />
              </button>
              <button onClick={() => openEmail(contactInfo.email)} className="social-btn">
                <Mail className="social-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
