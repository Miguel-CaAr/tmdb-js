import { watchListDataModal } from "./watchListDataModal.js";
import { notScroll } from "../notScroll.js";

export function watchListModal() {
  const btnWatchList = document.querySelector(".watchList");
  btnWatchList.addEventListener("click", () => {
    renderModal();
  });
}

function renderModal() {
  if (localStorage.length === 0) {
    const watchList = document.querySelector(".watchList");
    watchList.innerHTML = "🤷‍♂️ Lista vacia";
    watchList.classList.add("watchListEmpty");
    setTimeout(() => {
      watchList.innerHTML = "📅 Ver despues";
      watchList.classList.remove("watchListEmpty");
    }, 1000);
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

    notScroll(true);
  }
}
