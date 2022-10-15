// importamos axios para ahorrarnos una linea de codigo, basicamente porque el fetch no convierte automaticamente
// la respuesta de la api en un json, en cambio axios si lo hace =)

import axios, * as others from "axios";

// esta primera accion, hace una peticion a una api, luego, guardamos los datos que vienen en esa respuesta
// para luego enviarlo al reducer

export function getMovies() {
  return function (dispatch) {
    return axios
      .get("https://api-pf-cine.herokuapp.com/movies") // peticion
      .then((res) => res.data) // guardamos la respuesta
      .then((data) => dispatch({ type: "GET_MOVIES", payload: data })); //enviamos la respuesta al reducer
  };
}

export function getMovieName(title) {
  return function (dispatch) {
    return axios
      .get(`http://api-pf-cine.herokuapp.com/movies?name=${title}`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: "GET_MOVIE_BY_NAME", payload: data }));
  };
}
