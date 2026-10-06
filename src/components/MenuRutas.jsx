import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuRutas extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cine">Cine</Link>
          </li>
          <li>
            <Link to="/musica">Música</Link>
          </li>
          <li>
            <Link to="/formsimple">Form Simple</Link>
          </li>
          <li>
            <Link to="/collatz">conjetura de Collatz</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
