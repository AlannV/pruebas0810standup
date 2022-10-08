import React, { useState } from "react";

export default function Contador({
  mensaje,
  nombre,
  apellido,
  edad,
  profesion,
}) {
  const [contador, setContador] = useState(0);

  function suma() {
    setContador((contador) => (contador += 1));
  }

  function resta() {
    setContador((contador) => (contador -= 1));
  }

  function reset() {
    setContador(0);
  }

  return (
    <div className="App">
      <h3>Estados</h3>

      <h3>El valor del estado es: {contador}</h3>
      <button onClick={() => resta()}>-</button>
      <button onClick={() => suma()}>+</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}
