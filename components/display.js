import { posterMovie } from "./poster.js";

/**
 * Recorre el JSON para generar elementos HTML por cada pelicula.
 * @param {object} movies Recibe el JSON
 */
export function displayMovies(movies) {
    movies.forEach((movie) => {
      const container = document.querySelector(".listMovies");
  
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