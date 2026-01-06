import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">À propos</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Je suis développeur web, avec une spécialisation en développement frontend.
            Je travaille principalement avec React et TypeScript pour créer des interfaces
            utilisateur performantes et maintenables.
          </p>
          <p>
            En dehors du développement, je m'intéresse aux pratiques de code propre,
            à l'architecture logicielle et aux nouvelles technologies qui améliorent
            l'expérience de développement.
          </p>
          <p>
            Je suis toujours à la recherche de nouveaux défis et d'opportunités
            pour collaborer sur des projets intéressants.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

