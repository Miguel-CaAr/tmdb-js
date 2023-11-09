import { posterMovie } from "./poster.js";

/**
 * Recorre el JSON para generar elementos HTML por cada pelicula.
 * @param {object} movies JSON.
 * @param {string} contenedor Clase del elemento html, para renderizar peliculas dentro.
 */
export function displayMovies(movies, containerHTML) {
  movies.forEach((movie) => {
    const container = document.querySelector(containerHTML); //Aqui recibe por ejemplo la lista `.premiereMovies`.

    //Se crea un item para la lista "container".
    const card = document.createElement("li");
    card.className = "card";
    card.id = movie.title;
    container.appendChild(card);

    //Crea y obtiene el poster de la movie mediante la funcion `posterMovie` importada.
    const poster = document.createElement("img");
    poster.className = "poster";
    poster.src = `${posterMovie(movie.poster_path)}`;
    card.appendChild(poster);

    //Se agrega el rating a cada movie.
    const rating = document.createElement("div");
    rating.className = "rating"; //contenedor
    card.appendChild(rating);
    
    //Se agrega el porcentaje de rating al rating
    const percent = document.createElement("span");
    percent.className = "percent";
    percent.innerHTML = `${(movie.vote_average * 10).toFixed(0)}%`; //.toFixed() metodo para formatear un numero con una cantidad de digitos decimales y redondea
    rating.appendChild(percent);

    //Clasificacion
    classify(rating, movie.vote_average);
  });
}

function classify(rating, percent) {
  // Condicional para cambiar color en base al rating
  if (percent >= 8) {
    rating.classList.add("good"); //buena
  } else if (percent >= 6 && percent < 8) {
    rating.classList.add("regular"); //regular
  } else if (percent < 6 && percent != 0) {
    rating.classList.add("bad"); //mala
  }
}
