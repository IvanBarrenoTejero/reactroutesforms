import React, { Component } from "react";

export default class Collatz extends Component {
  cajaNumero = React.createRef();

  generarCollatz = (event) => {
    event.preventDefault();

    const valor = this.cajaNumero.current.value;
    if (!valor) {
      this.setState({ numeros: [] });
      return;
    }

    let numero = parseInt(valor, 10);
    const aux = [numero];

    while (numero !== 1) {
      if (numero % 2 === 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
      aux.push(numero);
    }

    this.setState({
      numeros: aux,
    });
  };

  state = {
    numeros: [],
  };

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <form onSubmit={this.generarCollatz}>
          <label>Introduzca número: </label>
          <input type="number" ref={this.cajaNumero} min="1" />
          <button type="submit">Generar</button>
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
