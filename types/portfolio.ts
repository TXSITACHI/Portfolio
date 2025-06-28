export interface ContactInfo {
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
  cvLink: string
}

export interface Skills {
  [category: string]: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  link: string
}
