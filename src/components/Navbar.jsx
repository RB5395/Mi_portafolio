import { Link } from 'react-router-dom';

function Navbar({ tema, toggleTema }) {

  return (

    <nav
      className={`navbar navbar-expand-lg px-4 ${
        tema === 'dark'
          ? 'navbar-dark bg-dark'
          : 'navbar-light bg-light'
      }`}
    >

      <div className="container-fluid">

        <Link
          className={`navbar-brand ${
            tema === 'dark'
              ? 'text-light'
              : 'text-dark'
          }`}
          to="/"
        >
          Mi Portafolio
        </Link>

        <div className="navbar-nav">

          <Link
            className={`nav-link ${
              tema === 'dark'
                ? 'text-light'
                : 'text-dark'
            }`}
            to="/"
          >
            Inicio
          </Link>

          <Link
            className={`nav-link ${
              tema === 'dark'
                ? 'text-light'
                : 'text-dark'
            }`}
            to="/about"
          >
            Sobre mí
          </Link>

          <Link
            className={`nav-link ${
              tema === 'dark'
                ? 'text-light'
                : 'text-dark'
            }`}
            to="/projects"
          >
            Proyectos
          </Link>

          <Link
            className={`nav-link ${
              tema === 'dark'
                ? 'text-light'
                : 'text-dark'
            }`}
            to="/contact"
          >
            Contacto
          </Link>

          <button
            onClick={toggleTema}
            className="btn btn-outline-secondary ms-3"
          >
            {tema === 'light'
              ? '🌙 Dark'
              : '☀️ Light'}
          </button>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;