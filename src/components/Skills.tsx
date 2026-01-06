import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
  FaPython,
  FaJava,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import './Skills.css'

interface Skill {
  name: string
  icon: JSX.Element
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML/CSS', icon: <FaHtml5 /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'Git', icon: <FaGitAlt /> },
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technologies</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

