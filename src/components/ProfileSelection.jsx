import { useState, useEffect, useRef } from 'react'

const ProfileSelection = ({ onProfileSelect }) => {
  const [gotModeEnabled, setGotModeEnabled] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef(null)
  const audioRef = useRef(null)

  // Single video source with correct path for production
  const videoSource = '/portfolio/assets/videos/hbo_video.mp4'

  const profiles = [
    {
      id: 'recruiter',
      name: 'Recruiter',
      icon: '👑',
      bgGradient: 'linear-gradient(135deg, #d97706, #b45309)',
      description: 'Professional achievements and experience'
    },
    {
      id: 'analyst',
      name: 'Data Analyst', 
      icon: '🐉',
      bgGradient: 'linear-gradient(135deg, #dc2626, #991b1b)',
      description: 'Technical projects and methodologies'
    },
    {
      id: 'collaborator',
      name: 'Collaborator',
      icon: '⚔️',
      bgGradient: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
      description: 'Team projects and partnerships'
    },
    {
      id: 'explorer',
      name: 'Explorer',
      icon: '🔥',
      bgGradient: 'linear-gradient(135deg, #ea580c, #dc2626)',
      description: 'Personal interests and learning journey'
    }
  ]

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  const toggleGotMode = async () => {
    setIsTransitioning(true)

    try {
      if (!gotModeEnabled) {
        // Enable GoT mode
        setGotModeEnabled(true)
        setAudioEnabled(true) // Enable audio by default
        // Add video-active class to body
        document.body.classList.add('video-active')

        // Start video playback with improved handling
        if (videoRef.current) {
          console.log('Setting up video with source:', videoSource)
          videoRef.current.src = videoSource
          videoRef.current.load()

          const attemptVideoPlay = async () => {
            try {
              console.log('Attempting to play video...')
              videoRef.current.currentTime = 0
              videoRef.current.muted = true

              const playPromise = videoRef.current.play()
              if (playPromise !== undefined) {
                await playPromise
                console.log('Video playing successfully')

                // Unmute after a short delay if video is actually playing
                setTimeout(() => {
                  if (videoRef.current && gotModeEnabled && !videoRef.current.paused) {
                    videoRef.current.muted = false
                    console.log('Video unmuted')
                  }
                }, 1000)
              }
            } catch (error) {
              console.error('Video autoplay failed:', error)
              console.log('User interaction may be required for video playback')
              // Keep video ready for manual play if needed
              videoRef.current.muted = true
            }
          }

          // Multiple event listeners for better compatibility
          const handleCanPlay = () => {
            console.log('Video can play - attempting playback')
            attemptVideoPlay()
          }

          const handleLoadedData = () => {
            console.log('Video data loaded')
            attemptVideoPlay()
          }

          const handlePlaying = () => {
            console.log('Video is now playing')
          }

          const handleError = (e) => {
            console.error('Video error:', e)
          }

          // Add multiple event listeners
          videoRef.current.addEventListener('loadeddata', handleLoadedData, { once: true })
          videoRef.current.addEventListener('canplay', handleCanPlay, { once: true })
          videoRef.current.addEventListener('playing', handlePlaying, { once: true })
          videoRef.current.addEventListener('error', handleError)
        }

        // Start audio playback (unmuted by default)
        if (audioRef.current) {
          try {
            audioRef.current.volume = 0.5 // Set to moderate volume
            audioRef.current.currentTime = 0
            await audioRef.current.play()
          } catch (error) {
            console.log('Audio playback failed:', error)
            setAudioEnabled(false)
          }
        }
      } else {
        // Disable GoT mode
        setGotModeEnabled(false)
        setAudioEnabled(false)
        // Remove video-active class from body
        document.body.classList.remove('video-active')

        // Stop video and audio
        if (videoRef.current) {
          videoRef.current.pause()
        }
        if (audioRef.current) {
          audioRef.current.pause()
        }
      }
    } catch (error) {
      console.log('Video playback failed:', error)
    } finally {
      setTimeout(() => setIsTransitioning(false), 800)
    }
  }


  const toggleAudio = async () => {
    if (!gotModeEnabled || isMobile()) return

    try {
      if (!audioEnabled) {
        setAudioEnabled(true)
        if (audioRef.current) {
          audioRef.current.currentTime = 0
          await audioRef.current.play()
        }
      } else {
        setAudioEnabled(false)
        if (audioRef.current) {
          audioRef.current.pause()
        }
      }
    } catch (error) {
      console.log('Audio playback failed:', error)
    }
  }

  useEffect(() => {
    // Handle video events
    const video = videoRef.current
    if (video) {
      const handleEnded = () => {
        if (gotModeEnabled) {
          console.log('Video ended, restarting loop')
          video.currentTime = 0
          video.play().catch(console.error)
        }
      }

      const handleError = (e) => {
        console.error('Video error:', e.target.error)
      }

      const handleLoadStart = () => {
        console.log('Video load started')
      }

      const handleCanPlay = () => {
        console.log('Video can play through')
      }

      const handlePause = () => {
        console.log('Video paused')
      }

      const handlePlay = () => {
        console.log('Video play event triggered')
      }

      const handlePlaying = () => {
        console.log('Video is actually playing')
      }

      const handleWaiting = () => {
        console.log('Video is buffering')
      }

      // Add comprehensive event listeners
      video.addEventListener('ended', handleEnded)
      video.addEventListener('error', handleError)
      video.addEventListener('loadstart', handleLoadStart)
      video.addEventListener('canplaythrough', handleCanPlay)
      video.addEventListener('pause', handlePause)
      video.addEventListener('play', handlePlay)
      video.addEventListener('playing', handlePlaying)
      video.addEventListener('waiting', handleWaiting)

      return () => {
        video.removeEventListener('ended', handleEnded)
        video.removeEventListener('error', handleError)
        video.removeEventListener('loadstart', handleLoadStart)
        video.removeEventListener('canplaythrough', handleCanPlay)
        video.removeEventListener('pause', handlePause)
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('playing', handlePlaying)
        video.removeEventListener('waiting', handleWaiting)
      }
    }
  }, [gotModeEnabled])

  useEffect(() => {
    // Handle audio ended event for looping
    const audio = audioRef.current
    if (audio) {
      const handleEnded = () => {
        if (audioEnabled) {
          audio.currentTime = 0
          audio.play().catch(console.error)
        }
      }
      audio.addEventListener('ended', handleEnded)
      return () => audio.removeEventListener('ended', handleEnded)
    }
  }, [audioEnabled])


  return (
    <div className="profile-selection">
      <div className="profile-background"></div>

      {/* Game of Thrones Background Video System */}
      {gotModeEnabled && (
        <div className={`got-video-container ${isTransitioning ? 'entering' : ''}`}>
          <video
            ref={videoRef}
            className="got-background-video dramatic"
            playsInline
            preload="auto"
            loop
            muted
            autoPlay
            controls={false}
          >
            <source src={videoSource} type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          <div className="got-video-overlay"></div>
        </div>
      )}

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        className="got-audio"
        loop
        preload="metadata"
      >
        <source src="/portfolio/assets/audio/got_audio.mp3" type="audio/mpeg" />
        {/* Add your GoT ambient music files here */}
      </audio>

      <div className={`profile-logo ${gotModeEnabled ? 'fade-out' : ''}`}>
        <span className="logo-text">DHAVAL</span>
        <span className="logo-accent">VIBHAKAR</span>
      </div>

      <div className="profile-content">
        <h1 className={`profile-title ${gotModeEnabled ? 'fade-out' : ''}`}>Who's Watching?</h1>

        <div className={`profile-grid ${gotModeEnabled ? 'fade-out' : ''}`}>
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="profile-card"
              onClick={() => onProfileSelect(profile)}
            >
              <div
                className="profile-avatar"
                style={{ background: profile.bgGradient }}
              >
                <span className="profile-icon">{profile.icon}</span>
              </div>
              <p className="profile-name">{profile.name}</p>
              <p className="profile-desc">{profile.description}</p>
            </div>
          ))}
        </div>

        <div className="got-controls">
          <button
            className={`got-toggle-btn ${gotModeEnabled ? 'active' : ''}`}
            onClick={toggleGotMode}
            disabled={isTransitioning}
          >
            {gotModeEnabled ? 'Exit Westeros' : 'Enter Westeros'}
          </button>

          {gotModeEnabled && !isMobile() && (
            <button
              className={`audio-toggle-btn ${audioEnabled ? 'active' : ''}`}
              onClick={toggleAudio}
              title={audioEnabled ? 'Mute Audio' : 'Enable Audio'}
            >
              {audioEnabled ? '🔊' : '🔇'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileSelection