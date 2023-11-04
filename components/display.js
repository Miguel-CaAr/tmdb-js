import { posterMovie } from "./poster.js";

/**
 * Recorre el JSON para generar elementos HTML por cada pelicula.
 * @param {object} movies JSON
 * @param {string} contenedor Clase del elemento html, para renderizar peliculas dentro
 */
export function displayMovies(movies, contenedor) {
  movies.forEach((movie) => {
    const container = document.querySelector(contenedor);

    const card = document.createElement("li");
    card.className = "card";
    card.id = movie.title;

    const poster = document.createElement("img");
    poster.className = "poster";
    poster.src = `${posterMovie(movie.poster_path)}`;

    card.appendChild(poster);
    container.appendChild(card);
  });
}
