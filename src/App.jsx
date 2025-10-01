import { useState } from 'react'
import IntroLoader from './components/IntroLoader'
import ProfileSelection from './components/ProfileSelection'
import MainPortfolio from './components/MainPortfolio'
import TimelinePage from './components/TimelinePage'
import './App.css'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentView, setCurrentView] = useState('profiles')
  const [selectedProfile, setSelectedProfile] = useState(null)

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile)
    setCurrentView('main')
  }

  const handleBackToProfiles = () => {
    setCurrentView('profiles')
    setSelectedProfile(null)
  }

  const handleViewTimeline = () => {
    setCurrentView('timeline')
  }

  const handleBackToMain = () => {
    setCurrentView('main')
  }

  return (
    <div className="App">
      {showIntro ? (
        <IntroLoader onComplete={handleIntroComplete} />
      ) : (
        <>
          {currentView === 'profiles' ? (
            <ProfileSelection onProfileSelect={handleProfileSelect} />
          ) : currentView === 'timeline' ? (
            <TimelinePage
              onBack={handleBackToMain}
              selectedProfile={selectedProfile}
              onBackToProfiles={handleBackToProfiles}
            />
          ) : (
            <MainPortfolio
              selectedProfile={selectedProfile}
              onBackToProfiles={handleBackToProfiles}
              onViewTimeline={handleViewTimeline}
            />
          )}
        </>
      )}
    </div>
  )
}

export default App