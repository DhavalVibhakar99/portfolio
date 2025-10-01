import { useState } from 'react'
import SkillCard from './SkillCard'
import SkillModal from './SkillModal'
import { getSkillsByCategory } from '../data/resumeData'
import '../styles/SkillsSection.css'

const SkillsSection = () => {
  const [selectedSkillId, setSelectedSkillId] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const skillsByCategory = getSkillsByCategory()
  const categories = ['all', ...Object.keys(skillsByCategory)]

  const handleSkillClick = (skill) => {
    setSelectedSkillId(skill.id)
  }

  const handleCloseModal = () => {
    setSelectedSkillId(null)
  }

  const getFilteredSkills = () => {
    if (selectedCategory === 'all') {
      return Object.values(skillsByCategory).flat()
    }
    return skillsByCategory[selectedCategory] || []
  }

  const filteredSkills = getFilteredSkills()

  return (
    <section className="skills-section">
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">
            Click any skill to see detailed experience, projects, and certifications
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Skills' : category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onClick={handleSkillClick}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="skills-empty">
            <p>No skills found in this category</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedSkillId && (
        <SkillModal
          skillId={selectedSkillId}
          onClose={handleCloseModal}
        />
      )}
    </section>
  )
}

export default SkillsSection