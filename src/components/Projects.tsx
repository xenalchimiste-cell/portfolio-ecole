import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Projet 1',
      description:
        'Description du projet. Ce que j\'ai fait, les défis rencontrés et les solutions apportées.',
      technologies: ['React', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 2,
      title: 'Projet 2',
      description:
        'Description du projet. Ce que j\'ai fait, les défis rencontrés et les solutions apportées.',
      technologies: ['React', 'Node.js'],
      github: 'https://github.com',
    },
    {
      id: 3,
      title: 'Projet 3',
      description:
        'Description du projet. Ce que j\'ai fait, les défis rencontrés et les solutions apportées.',
      technologies: ['TypeScript', 'Next.js'],
      demo: 'https://demo.com',
    },
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projets</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.id} className="project-item">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

