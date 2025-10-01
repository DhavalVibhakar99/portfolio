# 🎨 Dhaval Vibhakar's Portfolio

A modern, interactive portfolio website showcasing professional experience, technical skills, certifications, and projects.

## 🌐 Live Demo

[View Live Portfolio](https://dhavalvibhakar99.github.io/portfolio/)

## ✨ Features

- **Netflix-Inspired Design** - Clean, modern UI with smooth animations
- **HBO Max-Style Intro** - Cinematic intro with audio and animations
- **Interactive Modals** - Detailed storytelling for experiences and certifications
- **Skills Showcase** - Categorized technical skills with proficiency indicators
- **Certifications Gallery** - AWS, IBM, PwC, Accenture certifications with badges
- **Timeline View** - Life & Career journey visualization
- **Contact Form** - Integrated EmailJS for direct communication
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Custom Scrollbar** - Styled scrollbar for better aesthetics

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Hosting**: GitHub Pages

## 📂 Project Structure

```
dhaval-portfolio/
├── public/
│   └── assets/
│       ├── audio/             # Intro audio files
│       ├── certification/     # Certification PDFs
│       ├── files_ppt/         # Research papers & presentations
│       ├── videos/            # Logos and images
│       └── resume/            # Resume files
├── src/
│   ├── components/
│   │   ├── IntroLoader.jsx         # HBO Max-style intro
│   │   ├── MainPortfolio.jsx       # Main portfolio page
│   │   ├── TimelinePage.jsx        # Career timeline
│   │   ├── SkillsSection.jsx       # Skills grid
│   │   ├── ExperienceModal.jsx     # Experience details
│   │   ├── CertificationModal.jsx  # Certification stories
│   │   └── HireMeModal.jsx         # Contact form
│   ├── data/
│   │   └── resumeData.js           # All portfolio data
│   ├── styles/                     # Component styles
│   └── App.jsx                     # Main app component
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.19+ or v22.12+ recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DhavalVibhakar99/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📧 EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Add email service (Gmail, Yahoo, etc.)
3. Create email template with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{company}}`
   - `{{message}}`
4. Copy Service ID, Template ID, and Public Key
5. Add to `.env` file

## 🎯 Portfolio Sections

### Home
- Professional introduction
- Featured projects
- Work experience highlights
- Skills & Certifications cards

### Projects
- Dual Fuel Corp analytics projects
- CCTV Surveillance research
- Machine learning implementations

### Life & Career (Timeline)
- Work experience chronology
- Educational background
- Career milestones

### Skills
- Programming languages
- Data tools & platforms
- Cloud technologies
- Business intelligence tools

### Certifications
- AWS Solutions Architect (Certified)
- Research Publication (Published)
- IBM Data Science (Completed)
- PwC Power BI (Verified)
- Accenture Data Analytics (Verified)

## 🎨 Customization

### Update Personal Info
Edit `src/data/resumeData.js`:
```javascript
export const resumeData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... more fields
  }
}
```

### Add New Certification
```javascript
certifications: [
  {
    id: "unique-id",
    title: "Certification Name",
    issuer: "Issuing Organization",
    issueDate: "2024-01-01",
    logo: "/path/to/image.jpg",
    type: "Professional Certification",
    skills: ["Skill1", "Skill2"],
    story: {
      challenge: "...",
      approach: "...",
      impact: "..."
    }
  }
]
```

### Change Theme Colors
Edit CSS variables in component styles or `src/App.css`

## 📱 Mobile Features

- Hamburger menu with slide-in drawer
- Touch-optimized interactions
- Responsive grid layouts
- Mobile-friendly modals

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Dhaval Vibhakar**
- Email: dhaval.vibhakar@yahoo.com
- LinkedIn: [linkedin.com/in/dhavalvibhakar99](https://linkedin.com/in/dhavalvibhakar99)
- Location: Jersey City, NJ

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React + Vite
