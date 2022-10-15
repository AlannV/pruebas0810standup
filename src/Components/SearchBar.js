// ACLARACION!!!!
// este componente aun esta incompleto, pero ya lo vamos a desarrollar mejor

// importamos react y useState
import React, { useState } from "react";

// importamos el useDispatch para poder despachar las acciones
import { useDispatch } from "react-redux";

// importamos la accion que queremos utilizar
import { getMovieName } from "../Redux/Actions/index";

function SearchBar() {
  //encapsulamos el useDispatch en una variable
  const dispatch = useDispatch();

  //creamos un estado para guardar el input
  const [input, setInput] = useState("");

  //creamos una funcion para manejar el cambio del input
  //asi cada vez que cambia vamos agregando los caracteres al
  //estado input
  function handleChange(e) {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  // creamos la funcion que se va a encargar del submit,
  // que hace un dispatch de la accion getMovieName y guarda en el store el resultado
  // de momento no lo estamos mostrando en ningun lado, pero no se preocupen, ya lo
  // vamos a completar =)))

  function handleSubmit(e) {
    if (input === "") return alert("ingresa un nombre por favor");
    dispatch(getMovieName(input));
  }

  return (
    <div>
      <label>Buscar...</label>
      <input
        type="text"
        placeholder="search a movie..."
        onChange={(e) => handleChange(e)}
      ></input>
      <button onClick={(e) => handleSubmit(e)}>Buscar</button>
    </div>
  );
}

export default SearchBar;
