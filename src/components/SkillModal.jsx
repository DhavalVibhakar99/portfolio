import { useEffect } from 'react'
import { X, Calendar, Award, TrendingUp, Briefcase, Code, Link as LinkIcon } from 'lucide-react'
import { getSkillExperience, calculateYearsOfExperience } from '../data/resumeData'
import '../styles/SkillModal.css'

const SkillModal = ({ skillId, onClose }) => {
  const skillData = getSkillExperience(skillId)

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'

    // Handle ESC key
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  if (!skillData) return null

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return '#10b981'
    if (proficiency >= 80) return '#3b82f6'
    if (proficiency >= 70) return '#f59e0b'
    return '#6b7280'
  }

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 90) return 'Expert'
    if (proficiency >= 80) return 'Advanced'
    if (proficiency >= 70) return 'Proficient'
    return 'Intermediate'
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Present'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  return (
    <div className="skill-modal-backdrop" onClick={onClose}>
      <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="skill-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Header */}
        <div className="skill-modal-header">
          <div className="skill-modal-icon-large">{skillData.icon}</div>
          <div className="skill-modal-title-section">
            <h2 className="skill-modal-title">{skillData.name}</h2>
            <p className="skill-modal-category">{skillData.category}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="skill-modal-stats">
          <div className="skill-stat-card">
            <Calendar size={20} className="stat-icon" />
            <div className="stat-content">
              <div className="stat-value">{skillData.yearsOfExperience}+ years</div>
              <div className="stat-label">Experience</div>
            </div>
          </div>

          <div className="skill-stat-card">
            <TrendingUp size={20} className="stat-icon" />
            <div className="stat-content">
              <div className="stat-value">{getProficiencyLabel(skillData.proficiency)}</div>
              <div className="stat-label">Proficiency</div>
            </div>
          </div>

          <div className="skill-stat-card">
            <Code size={20} className="stat-icon" />
            <div className="stat-content">
              <div className="stat-value">{skillData.projects.length}</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>

          <div className="skill-stat-card">
            <Briefcase size={20} className="stat-icon" />
            <div className="stat-content">
              <div className="stat-value">{skillData.experiences.length}</div>
              <div className="stat-label">Companies</div>
            </div>
          </div>
        </div>

        {/* Proficiency Bar */}
        <div className="skill-modal-proficiency">
          <div className="proficiency-header">
            <span className="proficiency-label">Proficiency Level</span>
            <span className="proficiency-percentage">{skillData.proficiency}%</span>
          </div>
          <div className="proficiency-bar-large">
            <div
              className="proficiency-fill-large"
              style={{
                width: `${skillData.proficiency}%`,
                backgroundColor: getProficiencyColor(skillData.proficiency)
              }}
            />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="skill-modal-content">
          {/* Description */}
          <div className="skill-modal-section">
            <h3 className="section-title">About This Skill</h3>
            <p className="section-description">{skillData.description}</p>
          </div>

          {/* Projects Using This Skill */}
          {skillData.projects.length > 0 && (
            <div className="skill-modal-section">
              <h3 className="section-title">
                <Code size={20} />
                Projects Using {skillData.name}
              </h3>
              <div className="projects-list">
                {skillData.projects.map((project) => (
                  <div key={project.id} className="project-item">
                    <div className="project-header">
                      <div className="project-image-wrapper">
                        <img src={project.image} alt={project.title} className="project-image" />
                      </div>
                      <div className="project-info">
                        <h4 className="project-title">{project.title}</h4>
                        <p className="project-category">{project.category}</p>
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.filter(tech =>
                        tech.toLowerCase().includes(skillData.name.toLowerCase()) ||
                        skillData.relatedSkills.some(related =>
                          tech.toLowerCase().includes(related.toLowerCase())
                        )
                      ).map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    {project.details && (
                      <div className="project-impact">
                        <strong>Impact:</strong> {project.details.impact}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience with This Skill */}
          {skillData.experiences.length > 0 && (
            <div className="skill-modal-section">
              <h3 className="section-title">
                <Briefcase size={20} />
                Professional Experience
              </h3>
              <div className="experience-list">
                {skillData.experiences.map((exp) => (
                  <div key={exp.id} className="experience-item">
                    <div className="experience-header">
                      <div className="company-logo-wrapper">
                        <img src={exp.logo} alt={exp.company} className="company-logo" />
                      </div>
                      <div className="experience-info">
                        <h4 className="experience-company">{exp.company}</h4>
                        <p className="experience-position">{exp.position}</p>
                        <p className="experience-duration">
                          {formatDate(exp.startDate)} - {formatDate(exp.endDate)} • {calculateYearsOfExperience(exp.startDate, exp.endDate)} years
                        </p>
                      </div>
                    </div>
                    <p className="experience-description">{exp.description}</p>

                    {/* Filter achievements that mention this skill */}
                    {exp.achievements.filter(achievement =>
                      achievement.toLowerCase().includes(skillData.name.toLowerCase()) ||
                      skillData.relatedSkills.some(related =>
                        achievement.toLowerCase().includes(related.toLowerCase())
                      )
                    ).length > 0 && (
                      <div className="experience-achievements">
                        <strong>Key Achievements with {skillData.name}:</strong>
                        <ul>
                          {exp.achievements
                            .filter(achievement =>
                              achievement.toLowerCase().includes(skillData.name.toLowerCase()) ||
                              skillData.relatedSkills.some(related =>
                                achievement.toLowerCase().includes(related.toLowerCase())
                              )
                            )
                            .map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {skillData.certifications.length > 0 && (
            <div className="skill-modal-section">
              <h3 className="section-title">
                <Award size={20} />
                Related Certifications
              </h3>
              <div className="certifications-list">
                {skillData.certifications.map((cert) => (
                  <div key={cert.id} className="certification-item">
                    <div className="certification-image-wrapper">
                      <img src={cert.image} alt={cert.name} className="certification-image" />
                    </div>
                    <div className="certification-info">
                      <h4 className="certification-name">{cert.name}</h4>
                      <p className="certification-issuer">{cert.issuer}</p>
                      <p className="certification-date">{cert.date}</p>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="certification-link"
                        >
                          <LinkIcon size={16} />
                          View Credential
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Skills */}
          {skillData.relatedSkills.length > 0 && (
            <div className="skill-modal-section">
              <h3 className="section-title">Related Skills</h3>
              <div className="related-skills">
                {skillData.relatedSkills.map((related, idx) => (
                  <span key={idx} className="related-skill-tag">{related}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SkillModal