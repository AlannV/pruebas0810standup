// Acá definimos el estado global inicial

const initialState = {
  movies: [],
  movieDetail: {},
};

// Creamos la funcion reducer, que va a tomar como parametros el estado inicial y la acción a realizar

export default function rootReducer(state = initialState, action) {
  //definimos el switch que se va a encargar de tomar las acciones, compararlas con los casos
  //existentes y así decidir cual va a ejecutar

  switch (action.type) {
    //en este caso, vamos a tomar lo que viene de la accion get movies, lo pasamos por un filtro para
    //solo tomar las que tengan su propiedad active en true
    //guardamos lo filtrado y luego, asignamos el resultado a nuestro estado global, dentro
    //de la propiedad movies
    case "GET_MOVIES":
      let activeMovies = action.payload.filter((movie) => movie.active);
      return {
        ...state,
        movies: activeMovies,
      };
    // en este caso tomamos lo que viene de la accion getMovieName y lo guardamos en el estado global
    case "GET_MOVIE_BY_NAME":
      return {
        ...state,
        movieDetail: action.payload,
      };
    // nunca olvidarse de eso!!! en este caso, devolvemos el estado global
    default:
      return { ...state };
  }
}
