import React from 'react';

function Contacto() {
  return (
    <div>
      <h1>Contáctame</h1>
      <p>¿Tienes una duda que no pudiste resolver? Llena el formulario y te ayudaré.</p>
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input type="email" name="correo" />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="mensaje"></textarea>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
