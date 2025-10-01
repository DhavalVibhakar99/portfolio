import { useState, useEffect } from 'react'
import { Search, Bell, Briefcase, GraduationCap, Calendar, Menu, X } from 'lucide-react'
import { resumeData } from '../data/resumeData'
import '../styles/TimelinePage.css'

const TimelinePage = ({ onBack, selectedProfile, onBackToProfiles }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
    setIsDrawerOpen(!isDrawerOpen)
    setIsMobileMenuOpen(false)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
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
  const formatDate = (dateString) => {
    if (!dateString) return 'Present'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years === 0) return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
    if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
  }

  // Education data
  const education = [
    {
      id: 'pace-masters',
      institution: 'Pace University - Seidenberg School of Computer Science and Information Systems',
      degree: "Master's degree, Information Science/Studies",
      location: 'New York, NY',
      startDate: '2021-08',
      endDate: '2023-04',
      description: 'Specialized in data analytics, machine learning, and business intelligence'
    },
    {
      id: 'undergraduate',
      institution: 'Shree L R Tiwari College of Engineering',
      degree: 'B.Engg Information Technology',
      location: 'Thane, India',
      startDate: '2017-08',
      endDate: '2021-05',
      description: 'Engineering degree focused on Information Technology'
    },
    {
      id: 'hsc',
      institution: 'Shri T.P Bhatia Jr.College of Science',
      degree: 'HSC',
      location: 'Mumbai, India',
      startDate: '2015-06',
      endDate: '2017-05',
      description: 'Higher Secondary Certificate'
    },
    {
      id: 'ssc',
      institution: "St. Joseph's High School",
      degree: 'SSC',
      location: 'Mumbai, India',
      startDate: '2010-06',
      endDate: '2015-05',
      description: 'Secondary School Certificate'
    }
  ]

  // Combine and sort all timeline items
  const allTimelineItems = [
    ...resumeData.experience.map(exp => ({
      ...exp,
      type: 'work',
      sortDate: exp.endDate || '9999-12-31' // Current jobs sort to top
    })),
    ...education.map(edu => ({
      ...edu,
      type: 'education',
      company: edu.institution,
      position: edu.degree,
      sortDate: edu.endDate
    }))
  ].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate))

  return (
    <div className="timeline-page">
      {/* Header */}
      <header className="main-header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-logo" onClick={onBackToProfiles}>
              <img src="/portfolio/assets/videos/logo.png" alt="DHAVAL VIBHAKAR" className="logo-image" />
            </div>
            <nav className="header-nav">
              <button className="nav-item" onClick={onBack}>Home</button>
              <button className="nav-item" onClick={onBack}>Projects</button>
              <button className="nav-item active">Life & Career</button>
              <button className="nav-item" onClick={onBack}>Skills</button>
              <button className="nav-item hire-me-btn">Hire Me</button>
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
              <button className="mobile-nav-item" onClick={onBack}>Home</button>
              <button className="mobile-nav-item" onClick={onBack}>Projects</button>
              <button className="mobile-nav-item active" onClick={() => setIsMobileMenuOpen(false)}>Life & Career</button>
              <button className="mobile-nav-item" onClick={onBack}>Skills</button>
              <button className="mobile-nav-item hire-me-btn" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</button>
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
              <button className="drawer-nav-item" onClick={onBack}>
                Home
              </button>
              <button className="drawer-nav-item" onClick={onBack}>
                Projects
              </button>
              <button className="drawer-nav-item active" onClick={closeDrawer}>
                Life & Career
              </button>
              <button className="drawer-nav-item" onClick={onBack}>
                Skills
              </button>
              <button className="drawer-nav-item drawer-hire-btn" onClick={closeDrawer}>
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

      {/* Page Title */}
      <div className="timeline-page-header">
        <h1 className="timeline-page-title">Work Experience & Education Timeline</h1>
      </div>

      {/* Timeline Container */}
      <div className="timeline-container">
        <div className="timeline-line"></div>

        {allTimelineItems.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item ${item.type === 'work' ? 'timeline-work' : 'timeline-education'} ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
          >
            {/* Timeline Node */}
            <div className="timeline-node">
              {item.type === 'work' ? (
                <Briefcase size={20} />
              ) : (
                <GraduationCap size={20} />
              )}
            </div>

            {/* Timeline Date */}
            <div className="timeline-date">
              <Calendar size={16} />
              <span>{formatDate(item.startDate)} - {formatDate(item.endDate)}</span>
              <span className="timeline-duration">({calculateDuration(item.startDate, item.endDate)})</span>
            </div>

            {/* Timeline Card */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-card-title">
                  <h3>{item.position}</h3>
                  {item.endDate === null && (
                    <span className="current-badge">Current</span>
                  )}
                </div>
                <h4>{item.company}</h4>
                {item.location && (
                  <p className="timeline-location">{item.location}</p>
                )}
              </div>

              <div className="timeline-card-content">
                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}

                {item.achievements && item.achievements.length > 0 && (
                  <div className="timeline-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <div className="timeline-highlights">
                    <h5>Highlights:</h5>
                    <ul>
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.skills && item.skills.length > 0 && (
                  <div className="timeline-skills">
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="timeline-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimelinePage
