import React, { Component } from "react";

export default class FormSimple extends Component {
  // VARIABLE DE REFERENCIA AL INPUT
  cajaNombre = React.createRef();

  enviarInfo = (event) => {
    event.preventDefault();
    const nombre = this.cajaNombre.current.value;
    console.log("Datos enviados: " + nombre);
  };

  render() {
    return (
      <div>
        <h1>Form simple</h1>
        <form onSubmit={this.enviarInfo}>
          <label>Nombre: </label>
          <input type="text" ref={this.cajaNombre} />
          <button type="submit">Enviar información</button>
        </form>
      </div>
    );
  }
}
