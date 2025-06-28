import { Code } from "lucide-react"
import type { Skills } from "../types/portfolio"
import "../styles/skills.css"

interface SkillsSectionProps {
  skills: Skills
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Tech Stack</h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className={`skill-card skill-card-${index}`}>
              <div className="skill-header">
                <Code className={`skill-icon skill-icon-${index}`} />
                <h3 className="skill-title">{category}</h3>
              </div>
              <div className="skill-badges">
                {skillList.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
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
