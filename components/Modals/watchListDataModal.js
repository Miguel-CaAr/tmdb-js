import { closeModal } from "./closeModal.js";
import { posterMovie } from "../poster.js";

/**
 * Renderiza todo el conetenido del modal para peliculas añadidas a "ver despues"
 * @param {Element} modal Modal (HTML)
 * @param {Element} backgroundModal Elemento de fondo (HTML)
 * @param {Element} containerModal Contenedor del modal y el background
 */
export function watchListDataModal(modal, backgroundModal, containerModal) {
  //Layout del modal
  const headerModal = document.createElement("div");
  headerModal.className = "headerModal";

  const bodyModal = document.createElement("div");
  bodyModal.className = "bodyWatchList";

  //Boton para cerrar
  const btnClose = document.createElement("button");
  btnClose.className = "btnCloseModal";
  btnClose.innerHTML = "❌";
  headerModal.appendChild(btnClose);

  closeModal(btnClose, backgroundModal, containerModal);

  const title = document.createElement("h2");
  title.classList.add("watchListTitle");
  title.innerHTML = "PELICULAS PARA VER DESPUES";
  headerModal.appendChild(title);

  //Renderiza las peliculas que se añadieron
  renderMovies(bodyModal);

  //Agrega layout al modal
  modal.appendChild(headerModal);
  modal.appendChild(bodyModal);
}
/**
 * Renderiza las peliculas del localStorage en el mcuerpo del modal
 * @param {Element} bodyModal Cuerpo principal del modal que contiene la lista de peliculas
 */
function renderMovies(bodyModal) {
  const movies = Object.keys(localStorage);
  movies.forEach((movie) => {
    const posterPath = localStorage.getItem(movie);
    const card = document.createElement("div");
    card.id = movie;
    card.classList.add("cardSeeLater");

    const img = document.createElement("img");
    img.classList = "posterWatchList";
    img.src = posterMovie(posterPath);
    card.appendChild(img);
    bodyModal.appendChild(card);

    const btnDelete = document.createElement("span");
    btnDelete.classList.add("btnDelete");
    btnDelete.innerHTML = "⛔";
    card.appendChild(btnDelete);

    //Funcion del boton eliminar
    deleteMovie(btnDelete, card);
  });
}
/**
 * Elimina la pelicula tanto del localStorage como del modal
 * @param {Element} button Boton del modal para eliminar (HTML)
 * @param {Element} card Tarjeta de la pelicula para remover
 */
function deleteMovie(button, card) {
  button.addEventListener("click", () => {
    card.remove();
    localStorage.removeItem(card.id);
    watchListEmpty(); //Cerrar modal si no hay pelis para ver despues
  });
}
/**
 * Cierra automaticamente el modal si el localStorage esta vacio
 */
function watchListEmpty() {
  const watchlist = document.querySelector(".containerModal");
  if (localStorage.length === 0) {
    watchlist.remove();
  }
}
