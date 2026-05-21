import { useState } from 'react';
import SkillBadge from '../components/SkillBadge';

function AboutPage() {

  const [mostrarInfo, setMostrarInfo] = useState(true);

  const experiencia = [
    {
      puesto: 'Proyecto Portafolio React',
      empresa: 'Facultad',
      año: '2026',
    },
    {
      puesto: 'Sistema de Gestión',
      empresa: 'Proyecto Académico',
      año: '2025',
    },
  ];

  const educacion = [
    'Analista de Sistemas',
    'Cursos de React',
    'Programación Web',
  ];

  const habilidades = [
    'React',
    'JavaScript',
    'Bootstrap',
    'Git',
    'HTML',
    'CSS',
  ];

  return (

    <div className="container mt-5">

      <h1>Sobre mí</h1>

      <p className="mt-4">
        Soy estudiante de Analista de Sistemas
        interesada en desarrollo frontend,
        diseño web y aplicaciones modernas.
      </p>

      <button
        className="btn btn-primary mb-4"
        onClick={() => setMostrarInfo(!mostrarInfo)}
      >
        {mostrarInfo
          ? 'Ocultar información'
          : 'Mostrar información'}
      </button>

      {mostrarInfo && (

        <>
          <h3>Experiencia</h3>

          {experiencia.map((exp, index) => (

            <div
              key={index}
              className="card mb-3 p-3"
            >

              <h5>{exp.puesto}</h5>

              <p>
                {exp.empresa} - {exp.año}
              </p>

            </div>

          ))}

          <h3 className="mt-4">
            Educación
          </h3>

          <ul>

            {educacion.map((edu, index) => (
              <li key={index}>
                {edu}
              </li>
            ))}

          </ul>

          <h3 className="mt-4">
            Habilidades
          </h3>

          <div>

            {habilidades.map((hab, index) => (

              <SkillBadge
                key={index}
                nombre={hab}
              />

            ))}

          </div>

        </>

      )}

    </div>

  );
}

export default AboutPage;