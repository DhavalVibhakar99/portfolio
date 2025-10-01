import React, { useEffect } from 'react'
import { X, Award, Calendar, ExternalLink, FileText, Users, Lightbulb, Target, TrendingUp } from 'lucide-react'
import { getCertificationById } from '../data/resumeData'
import '../styles/CertificationModal.css'

const CertificationModal = ({ certificationId, onClose }) => {
  const cert = getCertificationById(certificationId)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!cert) return null

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Hero Section */}
        <div className="cert-modal-hero">
          <div className="cert-hero-badge">
            <Award size={48} />
          </div>
          <h1 className="cert-modal-title">{cert.title}</h1>
          <div className="cert-modal-meta">
            <div className="cert-meta-item">
              <span className="cert-meta-label">Issued by</span>
              <span className="cert-meta-value">{cert.issuer}</span>
            </div>
            <div className="cert-meta-divider"></div>
            <div className="cert-meta-item">
              <Calendar size={16} />
              <span className="cert-meta-value">{formatDate(cert.issueDate)}</span>
            </div>
          </div>

          {/* Credential Info */}
          <div className="cert-credentials-bar">
            {cert.credentialId && (
              <div className="cert-credential-item">
                <span className="credential-label">Credential ID:</span>
                <span className="credential-value">{cert.credentialId}</span>
              </div>
            )}
            {cert.doi && (
              <div className="cert-credential-item">
                <span className="credential-label">DOI:</span>
                <span className="credential-value">{cert.doi}</span>
              </div>
            )}
            {cert.badgeUrl && (
              <a href={cert.badgeUrl} target="_blank" rel="noopener noreferrer" className="cert-verify-link">
                <ExternalLink size={16} />
                <span>Verify Credential</span>
              </a>
            )}
            {cert.publicationUrl && (
              <a href={cert.publicationUrl} target="_blank" rel="noopener noreferrer" className="cert-verify-link">
                <FileText size={16} />
                <span>View Publication</span>
              </a>
            )}
          </div>

          {cert.coAuthors && cert.coAuthors.length > 0 && (
            <div className="cert-coauthors">
              <Users size={16} />
              <span>Co-authored with: {cert.coAuthors.join(', ')}</span>
            </div>
          )}
        </div>

        {/* Story Section */}
        <div className="cert-modal-content">
          {/* Challenge */}
          <div className="cert-story-section">
            <div className="cert-story-header">
              <div className="cert-story-icon challenge-icon">
                <Target size={24} />
              </div>
              <h2>The Challenge</h2>
            </div>
            <p className="cert-story-text">{cert.story.challenge}</p>
          </div>

          {/* Approach */}
          <div className="cert-story-section">
            <div className="cert-story-header">
              <div className="cert-story-icon approach-icon">
                <Lightbulb size={24} />
              </div>
              <h2>The Approach</h2>
            </div>
            <p className="cert-story-text">{cert.story.approach}</p>
          </div>

          {/* Impact */}
          <div className="cert-story-section">
            <div className="cert-story-header">
              <div className="cert-story-icon impact-icon">
                <TrendingUp size={24} />
              </div>
              <h2>The Impact</h2>
            </div>
            <p className="cert-story-text">{cert.story.impact}</p>
          </div>

          {/* Key Projects */}
          {cert.story.keyProjects && cert.story.keyProjects.length > 0 && (
            <div className="cert-projects-section">
              <h2 className="cert-projects-title">Key Projects & Applications</h2>
              <div className="cert-projects-grid">
                {cert.story.keyProjects.map((project, idx) => (
                  <div key={idx} className="cert-project-card">
                    <div className="cert-project-header">
                      <span className="cert-project-number">Project {idx + 1}</span>
                      <h3 className="cert-project-name">{project.name}</h3>
                    </div>
                    <p className="cert-project-description">{project.description}</p>
                    <div className="cert-project-tech">
                      {project.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="cert-tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Gained */}
          <div className="cert-skills-section">
            <h2 className="cert-skills-title">Skills & Expertise Gained</h2>
            <div className="cert-skills-grid">
              {cert.skills.map((skill, idx) => (
                <div key={idx} className="cert-skill-card">
                  <span className="cert-skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificationModal
