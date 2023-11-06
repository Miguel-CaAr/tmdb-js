export function moviesDetails(movies) {
  const pagina = document.querySelector("body");
  //Fondo oscuro
  const backgroundModal = document.createElement("div");
  backgroundModal.className = "backgroundModal";
  //Contenedor modal
  const modal = document.createElement("div");
  modal.className = "modal";
  //Boton para cerrar
  const btnClose = document.createElement("button");
  btnClose.className = "btnCloseModal";
  btnClose.innerHTML = "x";

  modal.appendChild(btnClose);
  backgroundModal.appendChild(modal);
  pagina.appendChild(backgroundModal);

  closeModal(btnClose, backgroundModal);
  openModal(movies, backgroundModal);
}

function openModal(movies, modal) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () =>{
      modal.style.display = "block";
    })
  });
}

function closeModal(btnClose, backgroundModal) {
  btnClose.addEventListener("click", () => {
    backgroundModal.style.display = "none";
  });
  backgroundModal.addEventListener("click", () => {
    backgroundModal.style.display = "none";
  });
}
