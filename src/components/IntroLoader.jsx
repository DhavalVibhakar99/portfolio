import { useState, useEffect, useRef } from 'react'
import '../styles/IntroLoader.css'

const IntroLoader = ({ onComplete }) => {
  const [stage, setStage] = useState('initial') // initial, animating, fading
  const audioRef = useRef(null)

  useEffect(() => {
    // Preload audio with correct path for production
    audioRef.current = new Audio('/portfolio/assets/audio/hbo-mp3cut.mp3')
    audioRef.current.preload = 'auto'
  }, [])

  const handleStart = () => {
    setStage('animating')

    // Play audio
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log('Audio play failed:', err))
    }

    // Start fade out after animation
    setTimeout(() => {
      setStage('fading')
    }, 3500) // Adjust timing to match your audio length

    // Complete and call onComplete
    setTimeout(() => {
      if (onComplete) onComplete()
    }, 4500)
  }

  if (stage === 'fading' || stage === 'complete') {
    return (
      <div className={`intro-loader ${stage === 'fading' ? 'fade-out' : ''}`}>
        <div className="intro-content fade-out-content">
          <div className="name-container">
            WHERE DATA
          </div>
          <div className="tagline">TELLS STORIES</div>
        </div>
      </div>
    )
  }

  if (stage === 'animating') {
    return (
      <div className="intro-loader animating">
        <div className="intro-content">
          <div className="circle-container">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
          <div className="name-container">
            WHERE DATA
          </div>
          <div className="tagline">TELLS STORIES</div>
        </div>
      </div>
    )
  }

  return (
    <div className="intro-loader initial">
      <div className="intro-content">
        <button className="start-button" onClick={handleStart}>
          <div className="button-glow"></div>
          <span className="button-text">Click to Enter</span>
          <div className="button-ring"></div>
        </button>
        <p className="start-hint">Click to experience the portfolio</p>
      </div>
    </div>
  )
}

export default IntroLoader
