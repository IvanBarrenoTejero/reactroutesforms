import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";
import FormSimple from "./FormSimple";
import MenuRutas from "./MenuRutas";
import Collatz from "./Collatz";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuRutas />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cine" element={<Cine />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/formsimple" element={<FormSimple />} />
          <Route path="/collatz" element={<Collatz />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
