import { useState } from 'react'
import '../styles/SkillCard.css'

const SkillCard = ({ skill, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return '#10b981' // green
    if (proficiency >= 80) return '#3b82f6' // blue
    if (proficiency >= 70) return '#f59e0b' // amber
    return '#6b7280' // gray
  }

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 90) return 'Expert'
    if (proficiency >= 80) return 'Advanced'
    if (proficiency >= 70) return 'Proficient'
    return 'Intermediate'
  }

  return (
    <div
      className="skill-card"
      onClick={() => onClick(skill)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="skill-card-inner">
        {/* Icon Section */}
        <div className="skill-icon-wrapper">
          <div className="skill-icon">{skill.icon}</div>
        </div>

        {/* Content Section */}
        <div className="skill-content">
          <h3 className="skill-name">{skill.name}</h3>

          <div className="skill-meta">
            <span className="skill-experience">{skill.yearsOfExperience}+ years</span>
            <span className="skill-proficiency-badge" style={{
              backgroundColor: `${getProficiencyColor(skill.proficiency)}20`,
              color: getProficiencyColor(skill.proficiency)
            }}>
              {getProficiencyLabel(skill.proficiency)}
            </span>
          </div>

          {/* Proficiency Bar */}
          <div className="skill-proficiency-bar">
            <div
              className="skill-proficiency-fill"
              style={{
                width: `${skill.proficiency}%`,
                backgroundColor: getProficiencyColor(skill.proficiency)
              }}
            />
          </div>

          {/* Project Count */}
          <div className="skill-stats">
            <span className="skill-stat">
              {skill.projectIds.length} {skill.projectIds.length === 1 ? 'Project' : 'Projects'}
            </span>
            <span className="skill-stat">
              {skill.experienceIds.length} {skill.experienceIds.length === 1 ? 'Company' : 'Companies'}
            </span>
          </div>
        </div>

        {/* Hover Overlay */}
        {isHovered && (
          <div className="skill-card-hover">
            <p className="skill-hover-text">Click to learn more</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SkillCard