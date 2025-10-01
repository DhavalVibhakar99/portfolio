import { useEffect } from 'react'
import { X } from 'lucide-react'
import { resumeData, calculateYearsOfExperience } from '../data/resumeData'

const ExperienceModal = ({ experienceId, onClose }) => {
  const experience = resumeData.experience.find(exp => exp.id === experienceId)

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden'

    // ESC key handler
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  if (!experience) return null

  const formatDate = (dateString) => {
    if (!dateString) return 'Present'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  const yearsWorked = calculateYearsOfExperience(experience.startDate, experience.endDate)

  // Get detailed description based on experience
  const getDetailedDescription = () => {
    switch (experience.id) {
      case 'dual-fuel':
        return {
          overview: `As a Data Analyst at Dual Fuel Corp, I lead data analytics initiatives across enterprise-level applications, transforming complex datasets into actionable business intelligence. My role encompasses end-to-end data pipeline development, advanced analytics, and strategic dashboard design that directly impacts executive decision-making.`,
          responsibilities: `I architect and maintain automated data pipelines processing over 100,000 records daily, ensuring 99.9% accuracy through robust validation frameworks. My work focuses on optimizing operational efficiency by developing automated reporting systems that have reduced manual analysis time from hours to minutes. I collaborate closely with cross-functional teams to translate business requirements into scalable cloud solutions, primarily leveraging AWS and Python ecosystems.`,
          impact: `Through strategic implementation of cloud-based data solutions, I've transformed legacy Excel-based workflows into scalable systems that empower stakeholders with real-time insights. My dynamic dashboards serve executive teams with real-time KPIs, enabling data-driven decisions that have resulted in measurable business improvements and operational excellence.`
        }
      case 'nys-ogs':
        return {
          overview: `During my internship at NYS Office of General Services, I worked within the Finance division of the Business Services Center, focusing on accounts payable, procurement reporting, and financial data validation to support statewide agencies across New York State.`,
          responsibilities: `I extracted and validated transactional data using Microsoft Access and Excel, ensuring accurate reconciliation of financial records across multiple sources. My responsibilities included auditing vendor invoices, reviewing Crystal Reports for procurement and reimbursement workflows, and ensuring reports matched agency finance requirements. I built interactive Tableau and Power BI dashboards to visualize procurement and SLA metrics, giving managers real-time insights into financial operations.`,
          impact: `Through meticulous data validation and audit processes, I identified over $20K in overcharges by auditing 500+ vendor invoices monthly, strengthening compliance and reducing downstream payment errors. My dashboard implementations reduced resolution times by 25%, and I effectively documented business requirements and translated findings into clear recommendations during cross-agency meetings, improving collaboration between analysts and finance teams.`
        }
      case 'insight-business':
        return {
          overview: `As a Data Analyst Intern at Insight Business Machine, I supported business intelligence initiatives and reporting automation, helping the company transition from manual reporting processes to automated, data-driven workflows.`,
          responsibilities: `I developed and maintained automated email reporting systems using Python, significantly reducing the time spent on manual report generation. My role involved creating Power BI dashboards for sales and inventory tracking, performing comprehensive data quality audits, and assisting in the migration of legacy databases to modern SQL-based systems. I worked closely with stakeholders to understand reporting requirements and delivered solutions that met their analytical needs.`,
          impact: `My automation initiatives reduced manual reporting by 60%, freeing up significant time for strategic analysis. Through systematic data quality audits, I identified and resolved over 500 data inconsistencies, improving the reliability of business reports and analytics. The Power BI dashboards I developed provided real-time visibility into sales and inventory metrics, enabling faster and more informed business decisions.`
        }
      default:
        return {
          overview: experience.description,
          responsibilities: '',
          impact: ''
        }
    }
  }

  const detailedDescription = getDetailedDescription()

  // Extract metrics from achievements
  const getMetrics = () => {
    const metrics = []
    experience.achievements.forEach(achievement => {
      const metricMatch = achievement.match(/(\d+[%KM+,\d]*)\s*(hours|records|accuracy|faster|monthly|saved|reduction|improved|increased|overcharges)/gi)
      if (metricMatch) {
        metrics.push(achievement)
      }
    })
    return metrics.slice(0, 3) // Top 3 metrics
  }

  const keyMetrics = getMetrics()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>

        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <div className="modal-company-info">
              <img src={experience.logo} alt={experience.company} className="modal-company-logo" />
              <div className="modal-company-details">
                <h2 className="modal-company-name">{experience.company}</h2>
                <p className="modal-location">{experience.location}</p>
              </div>
            </div>
            <div className="modal-position-info">
              <h3 className="modal-position">{experience.position}</h3>
              <p className="modal-dates">
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                <span className="modal-duration"> • {yearsWorked} {yearsWorked === 1 ? 'year' : 'years'}</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="modal-section">
            <h3 className="modal-section-title">About the Role</h3>
            <div className="modal-description">
              <p>{detailedDescription.overview}</p>
              {detailedDescription.responsibilities && <p>{detailedDescription.responsibilities}</p>}
              {detailedDescription.impact && <p>{detailedDescription.impact}</p>}
            </div>
          </div>

          {/* Key Metrics */}
          {keyMetrics.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">Key Metrics & Impact</h3>
              <div className="modal-metrics">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="metric-card">
                    <p>{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Achievements */}
          <div className="modal-section">
            <h3 className="modal-section-title">Key Achievements</h3>
            <ul className="modal-achievements">
              {experience.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="modal-section">
            <h3 className="modal-section-title">Technologies Used</h3>
            <div className="modal-tech-stack">
              {experience.skills.map((skill, index) => (
                <span key={index} className="tech-chip">{skill}</span>
              ))}
            </div>
          </div>

          {/* Skills Developed */}
          <div className="modal-section">
            <h3 className="modal-section-title">Skills Developed</h3>
            <div className="modal-skills-list">
              {experience.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-bullet">•</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceModal