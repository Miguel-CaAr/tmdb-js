import { api } from "./data/api.js";
import { displayMovies } from './components/display.js'
import { search } from "./components/search.js";

/**
 * Obtiene el JSON y renderiza las peliculas.
 */
async function getMovies() {
  const movies = await api();
  displayMovies(movies.results);
  search(movies.results);
}

getMovies();