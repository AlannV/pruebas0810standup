// importamos react como siempre, pero ahora agregamos la función useEffect,
// esta ultima es la encargada de reemplazar funciones como didComponentMount / unMount etc..
// basicamente, se encarga de despachar una accion cuando el componente, se monte, desmonte, o se modifique
import React, { useEffect } from "react";

// importamos la accion getMovies, para poder llamarla cuando la necesitemos
import { getMovies } from "../Redux/Actions/index";

// importamos useDispatch, que es lo que nos va a permitir despachar acciones y useSelector
// que nos va a permitir tomar un estado global o parte de el para poder trabar con el mismo
import { useDispatch, useSelector } from "react-redux";

// el componente que renderiza las cards
import MovieCard from "./MovieCard";

// este componente nos va a mostrar el resultado de la siguiente accion :

// export function getMovies() {
//   return function (dispatch) {
//     return axios
//       .get("https://api-pf-cine.herokuapp.com/movies")
//       .then((res) => res.data)
//       .then((data) => dispatch({ type: "GET_MOVIES", payload: data }));
//   };
// }

function Movies() {
  // como les explique en la clase, siempre debemos encapsular el
  // useDispatch dentro de una variable para poder trabajar con el
  const dispatch = useDispatch();

  // Creamos una variable, para guardar dentro el estado global

  const allMovies = useSelector((state) => state.movies);

  // Llamamos a useEffect, para que despache la accion y nos traiga los datos de las
  // peliculas

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  // recuerden el segundo argumento del use effect, el primero es la función que queremos
  // que haga el dispatch, y la segunda por el momento tiene que ser un array vacio
  // o el [dispatch] luego les explico con mas profundidad esto =)

  return (
    <div>
      Movies
      {allMovies.map((movie) => {
        return (
          <MovieCard
            title={movie.title}
            poster={movie.poster}
            description={movie.description}
            genre={movie.genre}
            active={movie.active.toString()}
          />
        );
      })}
    </div>
  );
}

export default Movies;
