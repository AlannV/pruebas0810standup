import React, { useState } from "react";
import "./Personas.css";

export default function Personas({ nombre, apellido, edad, profesion }) {
  return (
    <div className="persona">
      <h3 className="texto">Nombre: {nombre}</h3>
      <h3 className="texto">Apellido: {apellido}</h3>
      <h3 className="texto">Edad: {edad}</h3>
      <h3 className="texto">Profesión: {profesion}</h3>
    </div>
  );
}
