# GoT Theme Assets Guide

## 📁 Folder Structure
```
public/assets/
├── videos/          # Background video files
├── audio/           # Ambient music files
└── README.md        # This guide
```

## 🎥 Video Files Needed

Place these files in `public/assets/videos/`:

### Primary Video (Required)
- **got-fire.mp4** - Main fire/flame video for background
- **Resolution:** 1280x720 (720p) max
- **Duration:** 30-60 seconds for seamless looping
- **Size:** Under 5MB recommended

### Secondary Videos (Optional)
- **medieval-atmosphere.mp4** - Atmospheric medieval scenes
- **dragon-flames.mp4** - Dragon fire or similar dramatic flames

### Video Specifications
- **Format:** MP4 (H.264 codec)
- **Aspect Ratio:** 16:9
- **Frame Rate:** 24-30 fps
- **Bitrate:** 1-2 Mbps for background use
- **Loop:** Should loop seamlessly (first/last frame similar)

## 🎵 Audio Files Needed

Place these files in `public/assets/audio/`:

### Primary Audio (Required)
- **got-ambient.mp3** - Main ambient background music
- **Duration:** 3-5 minutes minimum
- **Volume:** Low/medium intensity for background
- **Loop:** Should loop seamlessly

### Secondary Audio (Optional)
- **westeros-theme.mp3** - GoT-style orchestral theme
- **medieval-atmosphere.wav** - Medieval tavern/castle sounds

### Audio Specifications
- **Format:** MP3 (best compatibility) or WAV (higher quality)
- **Bitrate:** 128kbps for MP3
- **Sample Rate:** 44.1kHz
- **Channels:** Stereo
- **Volume:** Normalized to prevent sudden loud sounds

## 🔍 Where to Find Assets

### Free Video Sources
1. **Pixabay** - https://pixabay.com/videos/
   - Search: "fire", "flame", "medieval", "candle"

2. **Pexels** - https://www.pexels.com/videos/
   - Search: "fire background", "atmospheric"

3. **Mixkit** - https://mixkit.co/free-stock-video/
   - Search: "fire", "abstract", "dark atmosphere"

4. **Videvo** - https://www.videvo.net/free-video/
   - Search: "flame", "medieval", "dark"

### Free Audio Sources
1. **Freesound** - https://freesound.org/
   - Search: "medieval ambient", "fantasy atmosphere"

2. **Zapsplat** - https://www.zapsplat.com/ (free with account)
   - Search: "medieval", "orchestral ambient"

3. **Pixabay** - https://pixabay.com/music/
   - Search: "medieval", "cinematic", "ambient"

4. **YouTube Audio Library**
   - Search: "cinematic", "medieval", "fantasy"

## 🛠️ File Optimization Tools

### Video Compression
- **HandBrake** (free) - https://handbrake.fr/
- **FFmpeg** (command line) - for advanced users
- **Online tools** - CloudConvert, Online-Convert

### Audio Editing
- **Audacity** (free) - https://www.audacityteam.org/
- **GarageBand** (Mac) - built-in
- **Online tools** - Online Audio Converter

## ✅ Quick Setup Checklist

1. ☐ Download 1-3 fire/flame videos (30-60 seconds each)
2. ☐ Download 1-2 ambient music tracks (3-5 minutes each)
3. ☐ Optimize file sizes (videos <5MB, audio <2MB)
4. ☐ Rename files to match the expected names:
   - `got-fire.mp4` (required)
   - `got-ambient.mp3` (required)
   - Add optional files as needed
5. ☐ Test in browser - toggle "Enter Westeros" button
6. ☐ Test audio toggle (desktop only)

## 🎯 Recommended Search Terms

### For Videos
- "fire burning loop"
- "candle flame close up"
- "medieval fire"
- "dark atmospheric background"
- "flickering flames"
- "fireplace burning"

### For Audio
- "medieval tavern ambience"
- "fantasy orchestral ambient"
- "game of thrones style music"
- "cinematic background music"
- "medieval atmospheric sounds"
- "wind castle sounds"

## 📱 Mobile Considerations
- Videos will be shown at 10% opacity on mobile for performance
- Audio is disabled by default on mobile devices
- Smaller file sizes recommended for mobile users

## 🚀 Performance Tips
- Keep total assets under 10MB for good loading times
- Test on slower connections
- Consider WebP format for images if needed
- Use lazy loading for large files