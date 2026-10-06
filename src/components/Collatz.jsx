import React, { Component } from "react";

export default class Collatz extends Component {
  cajaNumero = REact.crateRef();
  generarCollatz = (event) => {
    event.preventDefautl();
    let numero = ParseInt(this.cajaNumero.current.value);
    let aux = [];
    while (numero != 1) {
      if (numero % 2 == 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }

      aux.push(numero);
    }

    this.setState({});
  };

  state = {
    numeros: [],
  };

  render() {
    return (
      <div>
        <h1>Conjetura e Collatz</h1>
        <form onSubmit={this.generarCollatz}>
          <label>Introduzca número</label>
          <input type="number" ref={this.cajaNumero} />
        </form>
        <ul>
          {this.state.numeros.map((num, index) => {
            return <li key={index}>{num}</li>;
          })}
        </ul>
      </div>
    );
  }
}
