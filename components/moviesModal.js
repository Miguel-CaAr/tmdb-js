import { movieDisplayModal } from "./movieDisplayModal.js";

/**
 * Al clicar la tarjeta de la prelicula, crea un modal con detalles
 * @param {object} movies JSON de las peliculas
 */
export function moviesModal(movies) {
  const cardsMovies = document.querySelectorAll(".card");
  cardsMovies.forEach((cardMovie) => {
    //Recorre todas las tarjetas y les crea un evento click
    cardMovie.addEventListener("click", () => {
      renderModal(cardMovie, movies); //Al clicar la tarjeta, genera un renderizado de los detalles
    });
  });
}
/**
 * Renderiza el modal y los detalles de la pelicula
 * @param {Element} cardMovie Elemento HTML tarjeta de pelicula
 * @param {Object} movies JSON de las peliculas
 */
function renderModal(cardMovie, movies) {
  const pagina = document.querySelector("body");
  const containerModal = document.createElement("div");
  containerModal.className = "containerModal";
  pagina.appendChild(containerModal);
  //Fondo oscuro
  const backgroundModal = document.createElement("div");
  backgroundModal.className = "backgroundModal";
  containerModal.appendChild(backgroundModal);
  //Contenedor modal
  const modal = document.createElement("div");
  modal.className = "modal";
  containerModal.appendChild(modal);

  //Renderiza los detalles de la pelicula
  movieDisplayModal(
    modal,
    backgroundModal,
    cardMovie.id,
    movies,
    containerModal
  );
}
