import type { ContactInfo } from "../types/portfolio"

// Download CV function - now opens Google Docs link
export const downloadCV = (contactInfo: ContactInfo) => {
  window.open(contactInfo.cvLink, "_blank")
}

// Get in touch function
export const getInTouch = (email: string) => {
  const subject = "Let's work together!"
  const body = "Hi John,\n\nI'd like to discuss a potential project with you.\n\nBest regards,"
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.open(mailtoLink)
}

// Social media functions
export const openGitHub = (githubUrl: string) => {
  window.open(githubUrl, "_blank")
}

export const openLinkedIn = (linkedinUrl: string) => {
  window.open(linkedinUrl, "_blank")
}

export const openEmail = (email: string) => {
  const mailtoLink = `mailto:${email}`
  window.open(mailtoLink)
}

// Open project repository
export const openProject = (url: string) => {
  window.open(url, "_blank")
}
