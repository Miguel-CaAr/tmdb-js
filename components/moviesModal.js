import { movieDisplayModal } from "./movieDisplayModal.js";

export function moviesModal(movies) {
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

  openModal(backgroundModal, modal, movies, containerModal);
}

function openModal(backgroundModal, modal, movies, containerModal) {
  const cardsMovies = document.querySelectorAll(".card");
  cardsMovies.forEach((cardMovie) => {
    cardMovie.addEventListener("click", () => {
      containerModal.style.display = "block";
      //Renderiza los detalles de la pelicula
      movieDisplayModal(modal, backgroundModal, cardMovie.id, movies, containerModal);
    });
  });
}
