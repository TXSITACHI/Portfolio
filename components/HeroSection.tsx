"use client"

import { Download, Mail } from "lucide-react"
import { downloadCV, getInTouch } from "../utils/contactUtils"
import ProfilePhotoManager from "./ProfilePhotoManager"
import type { ContactInfo } from "../types/portfolio"
import "../styles/hero.css"

interface HeroSectionProps {
  contactInfo: ContactInfo
}

export default function HeroSection({ contactInfo }: HeroSectionProps) {
  const handlePhotoChange = (photoUrl: string | null) => {
    console.log("Profile photo updated:", photoUrl ? "Photo set" : "Photo removed")
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <ProfilePhotoManager onPhotoChange={handlePhotoChange} />

        <h1 className="hero-title">
          Aayush <span className="hero-name">Kumar Dev</span>
        </h1>

        <p className="hero-description">
          Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
        </p>

        <div className="hero-buttons">
          <button onClick={() => downloadCV(contactInfo)} className="btn btn-primary">
            <Download className="btn-icon" />
            Download CV
          </button>
          <button onClick={() => getInTouch(contactInfo.email)} className="btn btn-secondary">
            <Mail className="btn-icon" />
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
