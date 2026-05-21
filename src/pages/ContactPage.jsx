import { useReducer, useState } from 'react';

const initialState = {
  nombre: '',
  email: '',
  mensaje: '',
};

function reducer(state, action) {

  switch (action.type) {

    case 'ACTUALIZAR_CAMPO':
      return {
        ...state,
        [action.campo]: action.valor,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

function ContactPage() {

  const [formulario, dispatch] = useReducer(reducer, initialState);

  const [enviado, setEnviado] = useState(false);

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {

    dispatch({
      type: 'ACTUALIZAR_CAMPO',
      campo: e.target.name,
      valor: e.target.value,
    });

  };

  const validar = () => {

    const nuevosErrores = {};

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }

    if (!formulario.email.includes('@')) {
      nuevosErrores.email = 'Email inválido';
    }

    if (formulario.mensaje.trim().length < 5) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 5 caracteres';
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validar()) return;

    setEnviado(true);

    setTimeout(() => {
      setEnviado(false);
    }, 3000);

    dispatch({ type: 'RESET' });

  };

  return (
    <div className="container mt-5">

      <h1>Contacto</h1>

      <form
        className="mt-4"
        onSubmit={handleSubmit}
      >

        <div className="mb-3">

          <label className="form-label">
            Nombre
          </label>

          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            onBlur={validar}
            className={`form-control ${
              errores.nombre
               ? 'is-invalid'
                :formulario.nombre
               ? 'is-valid'
                : ''
            }`}
          />

          {errores.nombre && (
            <div className="invalid-feedback">
              {errores.nombre}
            </div>
          )}

        </div>

        <div className="mb-3">

          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            onBlur={validar}
            className={`form-control ${
              errores.email
               ? 'is-invalid' :
               formulario.email
               ? 'is-valid'
               : ''
            }`}
          />

          {errores.email && (
            <div className="invalid-feedback">
              {errores.email}
            </div>
          )}

        </div>

        <div className="mb-3">

          <label className="form-label">
            Mensaje
          </label>

         <textarea
          name="mensaje"
           value={formulario.mensaje}
           onChange={handleChange}
           onBlur={validar}
           className={`form-control ${
            errores.mensaje
            ? 'is-invalid'
            : formulario.mensaje
            ? 'is-valid'
            : ''
           }`}
         />

          {errores.mensaje && (
            <div className="invalid-feedback">
              {errores.mensaje}
            </div>
          )}

        </div>

        <button
          type="submit"
          className="btn btn-dark"
        >
          Enviar
        </button>

      </form>

      {enviado && (
        <div className="alert alert-success mt-4">
          Mensaje enviado correctamente
        </div>
      )}

    </div>
  );
}

export default ContactPage;