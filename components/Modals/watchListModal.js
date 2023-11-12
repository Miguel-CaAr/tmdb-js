import { watchListDataModal } from "./watchListDataModal.js";

export function watchListModal() {
  const btnWatchList = document.querySelector(".watchList");
  btnWatchList.addEventListener("click", () => {
    renderModal();
  });
}

function renderModal() {
  if (localStorage.length === 0) {
    console.log("No hay pelis compa");
  } else {
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

    watchListDataModal(modal, backgroundModal, containerModal);
  }
}
