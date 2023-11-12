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

    deleteMovie(btnDelete, card);
  });
}

function deleteMovie(button, card) {
  button.addEventListener("click", () => {
    card.remove();
    localStorage.removeItem(card.id);
    watchListEmpty(); //Cerrar modal si no hay pelis para ver despues
  });
}

function watchListEmpty() {
  const watchlist = document.querySelector(".containerModal");
  if (localStorage.length === 0) {
    watchlist.remove();
  }
}
