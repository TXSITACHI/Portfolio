import { Calendar, Award, Star } from "lucide-react"
import type { Experience } from "../types/portfolio"
import "../styles/experience.css"

interface ExperienceSectionProps {
  experience: Experience[]
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-list">
          {experience.map((job, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-info">
                  <h3 className="experience-title">{job.title}</h3>
                  <p className="experience-company">{job.company}</p>
                </div>
                <div className="experience-period">
                  <Calendar className="period-icon" />
                  {job.period}
                </div>
              </div>

              <p className="experience-description">{job.description}</p>

              <div className="achievements">
                <h4 className="achievements-title">
                  <Award className="achievements-icon" />
                  Key Achievements
                </h4>
                <ul className="achievements-list">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="achievement-item">
                      <Star className="achievement-star" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
