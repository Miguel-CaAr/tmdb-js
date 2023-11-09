export function options() {
  const options = document.querySelector(".options");
  const btnFav = document.querySelector(".btnFav");
  options.addEventListener("click", () => {
    if (options.classList.contains("optionsOpen")) {
      options.classList.remove("optionsOpen");
      btnFav.classList.remove("btnFavCollapsed");
    } else {
      options.classList.add("optionsOpen");
      btnFav.classList.add("btnFavCollapsed");
    }
  });
}
