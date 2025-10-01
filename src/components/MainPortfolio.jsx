import { useState, useEffect } from 'react'
import { Download, Linkedin, Search, Bell, ChevronRight, Play, Menu, X } from 'lucide-react'
import SkillsSection from './SkillsSection'
import ExperienceModal from './ExperienceModal'
import HireMeModal from './HireMeModal'
import CertificationModal from './CertificationModal'
import { certifications } from '../data/resumeData'

const MainPortfolio = ({ selectedProfile, onBackToProfiles, onViewTimeline }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState(null)
  const [isHireMeModalOpen, setIsHireMeModalOpen] = useState(false)
  const [selectedCertification, setSelectedCertification] = useState(null)

  // Handle body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isDrawerOpen])

  const toggleDrawer = () => {
    console.log('Toggle drawer clicked, current state:', isDrawerOpen)
    setIsDrawerOpen(!isDrawerOpen)
    setIsMobileMenuOpen(false) // Close old mobile menu if open
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
    closeDrawer()
  }

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('technical-skills')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
    closeDrawer()
  }

  const getProfileData = () => {
    const profiles = {
      'recruiter': { icon: '👑', bgGradient: 'linear-gradient(135deg, #d97706, #b45309)' },
      'analyst': { icon: '🐉', bgGradient: 'linear-gradient(135deg, #dc2626, #991b1b)' },
      'collaborator': { icon: '⚔️', bgGradient: 'linear-gradient(135deg, #2563eb, #1d4ed8)' },
      'explorer': { icon: '🔥', bgGradient: 'linear-gradient(135deg, #ea580c, #dc2626)' }
    }
    return profiles[selectedProfile?.id] || profiles['recruiter']
  }

  const profileData = getProfileData()

  const sections = [
    {
      title: 'Featured Projects',
      items: [
        {
          id: 1,
          title: 'Integrated CCTV Surveillance System',
          image: '/portfolio/assets/videos/cctv-surveillance.jpg',
          badge: 'PUBLISHED',
          description: 'Computer Vision • IJEAT Publication'
        },
        {
          id: 2,
          title: 'Real-Time Sensor Dashboard',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
          badge: 'FEATURED',
          description: 'Flask REST API • 60% faster diagnostics'
        },
        {
          id: 3,
          title: 'ARIMA-Keras Forecast Engine',
          image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop',
          badge: 'NEW',
          description: 'Machine Learning • 15% accuracy boost'
        },
        {
          id: 4,
          title: 'AWS Lambda Pipeline',
          image: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=400&h=225&fit=crop',
          badge: 'POPULAR',
          description: 'Cloud Architecture • Zero downtime'
        }
      ]
    },
    {
      title: 'Experience',
      items: [
        {
          id: 5,
          experienceId: 'dual-fuel',
          title: 'Dual Fuel Corp',
          image: '/portfolio/assets/videos/DualFuel_Logo.png',
          badge: 'CURRENT',
          description: 'Data Analyst • July 2023 - Present'
        },
        {
          id: 6,
          experienceId: 'pace-career-services',
          title: 'Pace University',
          image: '/portfolio/assets/videos/pace-logo.jpeg',
          description: 'Career Services Intern • Sept 2022 - Dec 2022'
        },
        {
          id: 7,
          experienceId: 'nys-ogs',
          title: 'NYS Office of General Services',
          image: '/portfolio/assets/videos/nys-ogs.png',
          description: 'Data Analyst Intern • June 2022 - Sept 2022'
        },
        {
          id: 8,
          experienceId: 'insight-business',
          title: 'Insight Business Machine',
          image: '/portfolio/assets/videos/insight-logo.svg',
          description: 'Data Analyst Intern • March 2020 - April 2021'
        }
      ]
    },
    {
      title: 'Skills & Certifications',
      items: certifications.map((cert, index) => ({
        id: `cert-${cert.id}`,
        certificationId: cert.id,
        title: cert.title,
        image: cert.logo || '/portfolio/assets/certifications/' + cert.id + '.png',
        badge: cert.type === 'Professional Certification' ? 'CERTIFIED' :
               cert.type === 'Research Publication' ? 'PUBLISHED' :
               cert.type === 'Professional Certificate Program' ? 'COMPLETED' : 'VERIFIED',
        description: cert.issuer
      }))
    }
  ]

  const continueWatching = [
    {
      id: 11,
      title: 'Music',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=225&fit=crop',
      progress: 65,
      timeLeft: 'Exploring new playlists'
    },
    {
      id: 12,
      title: 'Gaming',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=225&fit=crop',
      progress: 80,
      timeLeft: 'Leveling up skills'
    },
    {
      id: 13,
      title: 'Fitness Journey',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
      progress: 75,
      timeLeft: '5 days/week routine'
    },
    {
      id: 14,
      title: 'Tech Learning',
      image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=400&h=225&fit=crop',
      progress: 45,
      timeLeft: 'Exploring new frameworks'
    }
  ]

  return (
    <div className="main-portfolio">
      {/* Header */}
      <header className="main-header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-logo" onClick={onBackToProfiles}>
              <img src="/portfolio/assets/videos/logo.png" alt="DHAVAL VIBHAKAR" className="logo-image" />
            </div>
            <nav className="header-nav">
              <button className="nav-item">Home</button>
              <button className="nav-item" onClick={scrollToProjects}>Projects</button>
              <button className="nav-item" onClick={onViewTimeline}>Life & Career</button>
              <button className="nav-item" onClick={scrollToSkills}>Skills</button>
              <button className="nav-item hire-me-btn" onClick={() => setIsHireMeModalOpen(true)}>Hire Me</button>
            </nav>
            <button
              className="mobile-menu-toggle"
              onClick={toggleDrawer}
            >
              <Menu size={24} />
            </button>
          </div>
          <div className="header-right">
            <Search className="header-icon" />
            <div
              className="profile-avatar-small"
              style={{ background: profileData.bgGradient }}
              onClick={onBackToProfiles}
            >
              <span>{profileData.icon}</span>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <button className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>Home</button>
              <button className="mobile-nav-item" onClick={scrollToProjects}>Projects</button>
              <button className="mobile-nav-item" onClick={onViewTimeline}>Life & Career</button>
              <button className="mobile-nav-item" onClick={scrollToSkills}>Skills</button>
              <button className="mobile-nav-item hire-me-btn" onClick={() => { setIsHireMeModalOpen(true); setIsMobileMenuOpen(false); }}>Hire Me</button>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Side Drawer */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div className="drawer-backdrop" onClick={closeDrawer}></div>

          {/* Drawer */}
          <div className={`mobile-drawer ${isDrawerOpen ? 'drawer-open' : ''}`}>
            <nav className="drawer-nav">
              <button className="drawer-nav-item" onClick={closeDrawer}>
                Home
              </button>
              <button className="drawer-nav-item" onClick={scrollToProjects}>
                Projects
              </button>
              <button className="drawer-nav-item" onClick={onViewTimeline}>
                Life & Career
              </button>
              <button className="drawer-nav-item" onClick={scrollToSkills}>
                Skills
              </button>
              <button className="drawer-nav-item drawer-hire-btn" onClick={() => { setIsHireMeModalOpen(true); closeDrawer(); }}>
                Hire Me
              </button>
            </nav>

            <div className="drawer-footer">
              <div className="drawer-profile" onClick={onBackToProfiles}>
                <div
                  className="drawer-profile-avatar"
                  style={{ background: profileData.bgGradient }}
                >
                  <span>{profileData.icon}</span>
                </div>
                <span>Switch Profile</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-badges">
            <span className="series-badge">DATA ANALYST SERIES</span>
          </div>
          
          <h2 className="hero-title">
            DHAVAL VIBHAKAR - Turning Data Into Decisions, Insights Into Impact
          </h2>
          
          <div className="hero-info">
            <span className="match-badge">98% MATCH</span>
            <span>Masters in Information Science - Data Science, Pace University 2023</span>
            <span>Jersey City, NJ</span>
          </div>
          
          <p className="hero-description">
            Strategic and results-driven Data Analyst with 3+ years specializing in transforming complex datasets into actionable business intelligence across enterprise-level applications. I bring deep expertise in Python, SQL, AWS, Machine Learning, and advanced analytics, with a passion for uncovering insights that drive measurable business impact. I've architected data pipelines processing 100,000+ records daily and built predictive models that increased operational efficiency by 35%. Recent achievements include developing automated reporting systems that reduced manual analysis time from hours to minutes, implementing robust data validation frameworks ensuring 99.9% accuracy, and creating dynamic dashboards serving executive teams with real-time KPIs. Additionally, I transformed legacy Excel-based workflows into scalable cloud solutions using AWS and Python, delivering interactive visualizations that empowered stakeholders to make data-driven decisions instantly.
          </p>
          
          <div className="hero-actions">
            <a href="/assets/resume/Dhaval_Vibhakar_Resume.pdf" download="Dhaval_Vibhakar_Resume.pdf" className="play-btn">
              <Play size={24} />
              Resume
            </a>
            <a href="https://www.linkedin.com/in/dhavalvibhakar99" className="linkedin-btn" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>
          
          <div className="hero-skills">
            {['Python', 'AWS', 'Machine Learning', 'SQL', 'Power BI'].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
          
          <p className="hero-metrics">
            80% efficiency improvement • $1M+ cost savings • Zero downtime
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="content-wrapper">
        {sections.map((section, index) => (
          <section
            key={index}
            id={index === 0 ? 'featured-projects' : undefined}
            className="content-section"
          >
            <div className="section-header">
              <h2 className="section-title">{section.title}</h2>
            </div>
            
            <div className="projects-grid">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className={`project-card ${item.experienceId ? 'experience-card' : ''} ${item.certificationId ? 'certification-card' : ''}`}
                  onClick={() => {
                    if (item.experienceId) setSelectedExperience(item.experienceId)
                    if (item.certificationId) setSelectedCertification(item.certificationId)
                  }}
                >
                  <div className="card-image-wrapper">
                    <img src={item.image} alt={item.title} className={`card-image ${item.title === 'AWS Solutions Architect' ? 'aws-logo' : ''} ${item.title === 'Pace University' ? 'pace-logo' : ''} ${item.title === 'Dual Fuel Corp' ? 'dualfuel-logo' : ''} ${item.title === 'Insight Business Machine' ? 'insight-logo' : ''}`} />
                    {item.badge && (
                      <div className="card-badge">
                        <span className={`badge badge-${item.badge.toLowerCase()}`}>
                          {item.badge}
                        </span>
                      </div>
                    )}
                    <div className="card-overlay">
                      <Play className="play-icon" />
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Continue Watching */}
        <section className="content-section">
          <div className="section-header">
            <h2 className="section-title">Continue Watching</h2>
          </div>

          <div className="projects-grid">
            {continueWatching.map((item) => (
              <div key={item.id} className="continue-card">
                <div className="continue-image-wrapper">
                  <img src={item.image} alt={item.title} className="continue-image" />
                  <div className="progress-overlay">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <p className="progress-text">{item.timeLeft}</p>
                  </div>
                </div>
                <h3 className="continue-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Interactive Skills Section */}
      <div id="technical-skills">
        <SkillsSection />
      </div>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <h3 className="footer-title">Ready to Connect?</h3>
          <div className="contact-grid">
            <div className="contact-item">
              <h4>📧 Email</h4>
              <p>dhaval.vibhakar@yahoo.com</p>
            </div>
            <div className="contact-item">
              <h4>📍 Location</h4>
              <p>Jersey City, NJ</p>
            </div>
            <div className="contact-item">
              <h4>📱 Phone</h4>
              <p>(551) 312-6290</p>
            </div>
          </div>
          <button className="connect-btn">
            Let's Build Something Amazing
          </button>
          <div className="footer-copyright">
            <p>&copy; 2024 Dhaval Vibhakar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Experience Modal */}
      {selectedExperience && (
        <ExperienceModal
          experienceId={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}

      {/* Hire Me Modal */}
      <HireMeModal
        isOpen={isHireMeModalOpen}
        onClose={() => setIsHireMeModalOpen(false)}
      />

      {/* Certification Modal */}
      {selectedCertification && (
        <CertificationModal
          certificationId={selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      )}
    </div>
  )
}

export default MainPortfolio