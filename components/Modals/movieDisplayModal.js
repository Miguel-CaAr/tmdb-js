import { posterMovie } from "../poster.js";
/**
 * Hace un layout y renderiza los detalles de la pelicula dentro del layout
 * @param {element} modal Elemento HTML
 * @param {element} backgroundModal Elemento HTML
 * @param {string} title Titulo de la pelicula que se clico
 * @param {object} movies Elemento HTML
 * @param {element} containerModal Elemento HTML
 */
export function movieDisplayModal(
  modal,
  backgroundModal,
  title,
  movies,
  containerModal
) {
  //Disposicion del modal
  movies.forEach((element) => {
    //Recorre todas las peliculas para realizar una evaluacion
    if (element.title.includes(title)) {
      //Si alguna de las peliculas contiene el titulo de la pelicula cliclada entonces renderiza
      buildDisplay(element, modal, backgroundModal, containerModal);
    }
  });
}
/**
 * Crea el layout y pone los detalles de la peliucula dentro
 * @param {object} element Pelicula
 * @param {element} modal Elemento HTML
 * @param {element} backgroundModal Elemento HTML
 * @param {element} containerModal Elemento HTML
 */
function buildDisplay(element, modal, backgroundModal, containerModal) {
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
  //Botoness
  closeModal(btnClose, backgroundModal, containerModal);
  optionsModal(footerModal, element);
  //Agrega layout al modal
  modal.appendChild(headerModal);
  modal.appendChild(bodyModal);
  modal.appendChild(footerModal);
}
/**
 * Cierra el modal
 * @param {element} btnClose Elemento HTML
 * @param {element} backgroundModal Elemento HTML
 * @param {element} containerModal Elemento HTML
 */
function closeModal(btnClose, backgroundModal, containerModal) {
  btnClose.addEventListener("click", () => {
    containerModal.remove();
  });
  //Si presiona el boton ↑, si presiona el fondo ↓
  backgroundModal.addEventListener("click", () => {
    containerModal.remove();
  });
}
/**
 * Crea un boton desplegable de opciones flotante en la parte inferior derecha
 * @param {element} footerModal Elemento HTML
 * @param {object} movie JSON peliculas
 */
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
