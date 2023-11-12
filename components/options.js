/**
 * Funcionalidad para el boton flotante que contiene el boton de la lista "ver despues"s
 * Colapsa o expande el boton en base a su estado actual
 */
export function options() {
  const options = document.querySelector(".options");
  const watchList = document.querySelector(".watchList");
  options.addEventListener("click", () => {
    if (options.classList.contains("optionsOpen")) {
      options.classList.remove("optionsOpen");
      watchList.classList.remove("watchListNotCollapsed");
    } else {
      options.classList.add("optionsOpen");
      watchList.classList.add("watchListNotCollapsed");
    }
  });
}
