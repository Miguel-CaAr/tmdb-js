import { api } from "./data/api.js";
/**
 * Obtiene el JSON y renderiza las peliculas.
 */
async function getMovies() {
  const movies = await api();
  displayMovies(movies);
}

/**
 * Recorre el JSON para generar elementos HTML por cada pelicula.
 * @param {object} movies Recibe el JSON
 */
function displayMovies(movies) {
  movies.results.forEach((movie) => {
    const container = document.querySelector(".container");

    const card = document.createElement("div");
    card.className = "card";
    // card.innerHTML = `<h3>${movie.title}</h3>`;

    const poster = document.createElement("img");
    poster.className = "poster";
    poster.src = `${posterMovie(movie.poster_path)}`;

    card.appendChild(poster);
    container.appendChild(card);
  });
}

/**
 * Es para poder obtener el poster de la pelicula mediante su path (id) 
 * @param {string} id Recibe el poster_path (id) de la pelicula 
 * @returns Retorna la url al poster de la pelicula
 */
function posterMovie(id) {
  return `https://image.tmdb.org/t/p/w200/${id}`;
}

getMovies();