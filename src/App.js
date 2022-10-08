import React, { useState } from "react";
import gente from "./Components/BaseDeDatos.js";
import Contador from "./Components/Contador.js";
import Personas from "./Components/Personas.js";
import Crear from "./Components/Crear.js";
import "./App.css";

const gente2 = [...gente];

function App() {
  return (
    <div>
      <hr />
      <Crear />
      <hr />
      {/* {gente2.map((p) => (
        <Personas
          nombre={p.nombre}
          apellido={p.apellido}
          edad={p.edad}
          profesion={p.profesion}
        />
      ))} */}
      <hr />
      <Contador />
    </div>
  );
}

export default App;
