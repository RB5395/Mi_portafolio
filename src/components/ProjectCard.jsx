import PropTypes from 'prop-types';

function ProjectCard({
  nombre,
  descripcion,
  tecnologias,
  imagen
}) {

  return (

    <div className="card shadow-sm h-100">

      <img
        src={imagen}
        className="card-img-top"
        style={{
          height: '200px',
         objectFit: 'cover'
        }}
      />

      <div className="card-body">

        <h5 className="card-title">
          {nombre}
        </h5>

        <p className="card-text">
          {descripcion}
        </p>

        <div>

          {tecnologias.map((tec, index) => (

            <span
              key={index}
              className="badge bg-dark me-2"
            >
              {tec}
            </span>

          ))}

        </div>

      </div>

    </div>

  );
}

ProjectCard.propTypes = {

  nombre: PropTypes.string.isRequired,

  descripcion: PropTypes.string.isRequired,

  tecnologias: PropTypes.array.isRequired,

  imagen: PropTypes.string.isRequired,
};

export default ProjectCard;