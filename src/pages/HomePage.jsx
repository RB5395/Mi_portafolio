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
        src="https://i.pravatar.cc/200"
        alt="foto perfil"
        className="rounded-circle mb-4"
      />

      <h1>
        Mariana Cepeda
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
      </Link>

    </div>
  );
}

export default HomePage;