import { api } from "./data/api.js";
import { displayMovies } from "./components/display.js";
import { search } from "./components/search.js";
import { moviesDetails } from "./components/moviesDetails.js";
/**
 * Obtiene el JSON y renderiza las peliculas.
 */
async function App() {
  //PELICULAS POPULARES
  const premiereMovies = await api("now_playing"); //Obtiene JSON segun el argumento (path segment)
  displayMovies(premiereMovies.results, ".premiereMovies"); //Renderiza las peliculas en el contenedor HTML
  //PELICULAS ESTRENO
  const upcomingMovies = await api("upcoming");
  displayMovies(upcomingMovies.results, ".upcomingMovies");

  //BUSCADOR
  const movies = premiereMovies.results.concat(upcomingMovies.results); //Concatenamos los arreglos de los objetos (.results es la propiedad array)
  search(movies); //Buscador en el contenedor HTML

  //DETALLES DE LA PELICULA
  moviesDetails(movies);
}

App();
