import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Bonjour, je m'appelle</p>
          <h1 className="hero-title">Votre Nom</h1>
          <h2 className="hero-subtitle">Je construis des applications web</h2>
          <p className="hero-description">
            Développeur basé en France, spécialisé dans la création d'interfaces
            et d'expériences numériques. Actuellement, je travaille sur des projets
            en React et TypeScript.
          </p>
          <div className="hero-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:email@example.com"
              aria-label="Email"
              className="social-link"
            >
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

