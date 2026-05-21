import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../data/proyectos.json';

function ProjectsPage() {

  const [proyectos, setProyectos] = useState([]);

  const [cargando, setCargando] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {

    const cargarProyectos = async () => {

      try {

        await new Promise(resolve =>
          setTimeout(resolve, 1000)
        );

        setProyectos(proyectosData);

      } catch (err) {

        setError('Error al cargar proyectos');

      } finally {

        setCargando(false);
      }
    };

    cargarProyectos();

  }, []);

  if (cargando) {

    return (
      <h2 className="text-center mt-5">
        Cargando proyectos...
      </h2>
    );
  }

  if (error) {

    return (
      <div className="alert alert-danger mt-5">
        {error}
      </div>
    );
  }

  return (

    <div className="container mt-5">

      <h1 className="mb-4">
        Mis proyectos
      </h1>

      <div className="row">

        {proyectos.map((proyecto) => (

          <div
            key={proyecto.id}
            className="col-md-6"
          >

            <ProjectCard
              nombre={proyecto.nombre}
              descripcion={proyecto.descripcion}
              tecnologias={proyecto.tecnologias}
              imagen={proyecto.imagen}
            />

          </div>

        ))}

      </div>

    </div>
  );
}

export default ProjectsPage;