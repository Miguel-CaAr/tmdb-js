import { posterMovie } from "./poster.js";

export function movieDisplayModal(modal, backgroundModal, title, movies) {
  //Disposicion del modal

  movies.forEach((element) => {
    if (element.title.includes(title)) {
      buildDisplay(element, modal, backgroundModal);
    }
  });
}

function buildDisplay(element, modal, backgroundModal) {
  //Primero se limpia el modal
  modal.innerHTML = "";
  //Layout del modal
  const headerModal = document.createElement("div");
  headerModal.className = "headerModal";

  const bodyModal = document.createElement("div");
  bodyModal.className = "bodyModal";

  const footerModal = document.createElement("div");
  footerModal.className = "footerModal";

  //Boton para cerrar
  const btnClose = document.createElement("button");
  btnClose.className = "btnCloseModal";
  btnClose.innerHTML = "❌";
  headerModal.appendChild(btnClose);

  //Agrega los elementos HTML con datos de la pelicula en layout
  const movieTitle = document.createElement("h1");
  movieTitle.className = "movieTitle";
  movieTitle.innerHTML = element.title;
  headerModal.appendChild(movieTitle);

  const moviePoster = document.createElement("img");
  moviePoster.className = "moviePoster";
  moviePoster.src = posterMovie(element.poster_path);
  bodyModal.appendChild(moviePoster);

  const movieDescription = document.createElement("p");
  movieDescription.className = "movieDescription";
  movieDescription.innerHTML = element.overview;
  bodyModal.appendChild(movieDescription);

  closeModal(btnClose, backgroundModal);

  optionsModal(footerModal, element);

  //Agrega layout al modal
  modal.appendChild(headerModal);
  modal.appendChild(bodyModal);
  modal.appendChild(footerModal);
}

function closeModal(btnClose, backgroundModal) {
  btnClose.addEventListener("click", () => {
    backgroundModal.style.display = "none";
  });
  //Si presiona el boton ↑, si presiona el fondo ↓
  backgroundModal.addEventListener("click", () => {
    backgroundModal.style.display = "none";
  });
}

function optionsModal(footerModal, movie) {
  const btnSeeLater = document.createElement("button");
  btnSeeLater.innerHTML = "📅 Ver despues";
  btnSeeLater.className = "btnSeeLater";
  footerModal.appendChild(btnSeeLater);

  //Aun no se que hara quiza ver video en yt
  const aunNoSe = document.createElement("button");
  aunNoSe.className = "aunNoSe";
  footerModal.appendChild(aunNoSe);
}
