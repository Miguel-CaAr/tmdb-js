/**
 * Es para poder obtener el poster de la pelicula mediante su path (id)
 * @param {string} id Recibe el poster_path (id) de la pelicula
 * @returns Retorna la url al poster de la pelicula
 */
export function posterMovie(id) {
  return `https://image.tmdb.org/t/p/w200/${id}`;
}
