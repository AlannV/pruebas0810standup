import React from "react";

// este componente es simple, no creo que necesite mucha explicacion

// toma datos para renderizar una card

function MovieCard({ title, poster, description, genre, active }) {
  return (
    <div>
      <h4>Titulo: {title}</h4>
      <img src={poster} width="150px" height="150px" />
      <p>{description}</p>
      <p>{active}</p>
      <ul>
        {genre.map((gen) => {
          return <li>{gen}</li>;
        })}
      </ul>
    </div>
  );
}

export default MovieCard;
