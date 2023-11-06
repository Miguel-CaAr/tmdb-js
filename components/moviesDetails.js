export function moviesDetails() {
  const body = document.querySelector("body");
  //Fondo oscuro
  const backgroundModal = document.createElement("div");
  backgroundModal.className = "backgroundModal";
  //Contenedor modal
  const modal = document.createElement("div");
  modal.className = "modal";
  //Boton para cerrar
  const close = document.createElement("button");
  close.className = "btnCloseModal";
  close.innerHTML = "x";

  modal.appendChild(close);
  backgroundModal.appendChild(modal);
  body.appendChild(backgroundModal);

  cerrarModal(close, backgroundModal, modal);
  abrirModal(backgroundModal);
}

function abrirModal(modal) {
}

function cerrarModal(botonCerrar, modal) {
  botonCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
