export function watchListModal() {
  const btnWatchList = document.querySelector(".watchList");
  btnWatchList.addEventListener("click", () => {
    renderModal();
  });
}

function renderModal() {
  const pagina = document.querySelector("main");
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

  //Boton para cerrar
  const btnClose = document.createElement("button");
  btnClose.className = "btnCloseModal";
  btnClose.innerHTML = "❌";
  modal.appendChild(btnClose);

  closeModal(btnClose, backgroundModal, containerModal);
}

function closeModal(btnClose, backgroundModal, containerModal) {
  btnClose.addEventListener("click", () => {
    containerModal.remove();
  });
  //Si presiona el boton ↑, si presiona el fondo ↓
  backgroundModal.addEventListener("click", () => {
    containerModal.remove();
  });
}
