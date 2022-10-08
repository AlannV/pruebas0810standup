import React, { useState } from "react";
import "./Crear.css";
import Personas from "./Personas";
import gente from "./BaseDeDatos";

let gente3 = [...gente];

export default function Crear() {
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    profesion: "",
  });

  const [cards, setCards] = useState([]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    gente3.push(input);
    console.log(cards);
    setCards(...gente3);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder="ingrese nombre..."
          onChange={(e) => handleChange(e)}
        />
        <label>Apellido: </label>
        <input
          type="text"
          name="apellido"
          placeholder="ingrese apellido..."
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label>Edad: </label>
        <input
          type="number"
          name="edad"
          placeholder="ingrese edad..."
          onChange={(e) => handleChange(e)}
        />
        <label>Profesion: </label>
        <input
          type="text"
          name="profesion"
          placeholder="ingrese profesion..."
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Crear Persona</button>
      </form>

      <hr />

      {gente3.map((g) => {
        return (
          <Personas
            nombre={g.nombre}
            apellido={g.apellido}
            edad={g.edad}
            profesion={g.profesion}
          />
        );
      })}
    </div>
  );
}
