import { closeModal } from "./closeModal.js";
import { posterMovie } from "../poster.js";

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

  //Peliculas añadidas a la lista de "ver despues"
  const title = document.createElement("h2");
  title.classList.add("watchListTitle");
  title.innerHTML = "PELICULAS PARA VER DESPUES";
  headerModal.appendChild(title);

  const movies = Object.keys(localStorage);
  movies.forEach((movie) => {
    const poster = localStorage.getItem(movie);
    const card = document.createElement("img");
    card.classList = "posterWatchList";
    card.src = posterMovie(poster);
    bodyModal.appendChild(card);
  });

  //Agrega layout al modal
  modal.appendChild(headerModal);
  modal.appendChild(bodyModal);
}
