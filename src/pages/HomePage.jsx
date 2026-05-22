import SkillBadge from '../components/SkillBadge';
import { Link } from 'react-router-dom';

function HomePage() {

  const skills = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Bootstrap',
  ];

  return (

    <div className="container text-center mt-5">
<img
  src="/Mi_portafolio/public/Perfil.jpg"
  alt="foto perfil"
  className="rounded-circle mb-4"
  style={{
    width: '200px',
    height: '200px',
    objectFit: 'cover'
  }}
/>

      <h1>
        Angely Mariana Cepeda
      </h1>

      <p className="lead">
        Estudiante de Analista de Sistemas | Frontend Developer 
      </p>

      <div className="mt-4">

        {skills.map((skill, index) => (
          <SkillBadge
            key={index}
            nombre={skill}
          />
        ))}

      </div>

      <Link
        to="/contact"
        className="btn btn-primary mt-4"
      >
        Contactarme
        
      </Link><div className="mt-4">

      <a
        href="https://github.com/RB5395"
        target="_blank"
        className="btn btn-dark me-2"
      >
         GitHub
      </a>

      <a
         href="https://linkedin.com"
         target="_blank"
         className="btn btn-primary"
      >
         LinkedIn
        </a>



      </div>
      <a
        href="/Mi_portafolio/cv.pdf"
        download
        className="btn btn-success mt-3"
      >
        Descargar CV
      </a>
    </div>
  );
}

export default HomePage;