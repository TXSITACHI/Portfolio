"use client"

import { Mail, Phone, MapPin, Rocket } from "lucide-react"
import { getInTouch } from "../utils/contactUtils"
import type { ContactInfo } from "../types/portfolio"
import "../styles/contact.css"

interface ContactSectionProps {
  contactInfo: ContactInfo
}

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-description">
          I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to
          life.
        </p>

        <div className="contact-cards">
          <div className="contact-card email-card">
            <Mail className="contact-card-icon" />
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-text">{contactInfo.email}</p>
          </div>

          <div className="contact-card phone-card">
            <Phone className="contact-card-icon" />
            <h3 className="contact-card-title">Phone</h3>
            <p className="contact-card-text">{contactInfo.phone}</p>
          </div>

          <div className="contact-card location-card">
            <MapPin className="contact-card-icon" />
            <h3 className="contact-card-title">Location</h3>
            <p className="contact-card-text">{contactInfo.location}</p>
          </div>
        </div>

        <button onClick={() => getInTouch(contactInfo.email)} className="btn btn-primary contact-btn">
          <Rocket className="btn-icon" />
          Start a Project
        </button>
      </div>
    </section>
  )
}
