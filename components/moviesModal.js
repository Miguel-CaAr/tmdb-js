import { movieDisplayModal } from "./movieDisplayModal.js";

export function moviesModal(movies) {
  const pagina = document.querySelector("body");
  //Fondo oscuro
  const backgroundModal = document.createElement("div");
  backgroundModal.className = "backgroundModal";
  pagina.appendChild(backgroundModal);
  //Contenedor modal
  const modal = document.createElement("div");
  modal.className = "modal";
  backgroundModal.appendChild(modal);

  openModal(backgroundModal, modal, movies);
}



function openModal(backgroundModal, modal, movies) {
  const cardsMovies = document.querySelectorAll(".card");
  cardsMovies.forEach((cardMovie) => {
    cardMovie.addEventListener("click", () => {
      backgroundModal.style.display = "block";
      //Renderiza los detalles de la pelicula
      movieDisplayModal(modal, backgroundModal, cardMovie.id, movies);
    });
  });
}