import { posterMovie } from "./poster.js";

/**
 * Recorre el JSON para generar elementos HTML por cada pelicula.
 * @param {object} movies JSON.
 * @param {string} contenedor Clase del elemento html, para renderizar peliculas dentro.
 */
export function displayMovies(movies, contenedor) {
  movies.forEach((movie) => {
    const container = document.querySelector(contenedor); //Aqui recibe por ejemplo la lista `.premiereMovies`.

    //Se crea un item para la lista "container".
    const card = document.createElement("li");
    card.className = "card";
    card.id = movie.title;

    //Crea y obtiene el poster de la movie mediante la funcion `posterMovie` importada.
    const poster = document.createElement("img");
    poster.className = "poster";
    poster.src = `${posterMovie(movie.poster_path)}`;

    //Se agrega el rating a cada movie.
    const rating = document.createElement("div");
    const percent = document.createElement("span");
    rating.className = "rating"; //contenedor
    percent.className = "percent"; //numero
    percent.innerHTML = `${(movie.vote_average * 10).toFixed(0)}%`; //.toFixed() metodo para formatear un numero con una cantidad de digitos decimales y redondea

    rating.appendChild(percent);
    card.appendChild(rating);
    card.appendChild(poster);
    container.appendChild(card);
  });
}
