import { api } from "./api.js";

async function getMovies() {
  const movies = await api();
  displayMovies(movies);
}

function displayMovies(movies) {
  movies.results.forEach((movie) => {
    const container = document.querySelector(".container");

    const card = document.createElement("div");
    card.innerHTML = `<h3>${movie.title}</h3>`;

    const poster = document.createElement("img");
    poster.src = `${posterMovie(movie.poster_path)}`;

    card.appendChild(poster);
    container.appendChild(card);
  });
}

function posterMovie(id) {
  return `https://image.tmdb.org/t/p/w200/${id}`;
}

getMovies();
