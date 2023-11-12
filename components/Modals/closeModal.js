import { notScroll } from "../notScroll.js";

/**
 * Cierra el modal
 * @param {element} btnClose Elemento HTML
 * @param {element} backgroundModal Elemento HTML
 * @param {element} containerModal Elemento HTML
 */
export function closeModal(btnClose, backgroundModal, containerModal) {
  btnClose.addEventListener("click", () => {
    containerModal.remove();
    notScroll(false);
  });
  //Si presiona el boton ↑, si presiona el fondo ↓
  backgroundModal.addEventListener("click", () => {
    containerModal.remove();
    notScroll(false);
  });
}
