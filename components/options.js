export function options() {
  const options = document.querySelector(".options");
  const watchList = document.querySelector(".watchList");
  options.addEventListener("click", () => {
    if (options.classList.contains("optionsOpen")) {
      options.classList.remove("optionsOpen");
      watchList.classList.remove("watchListCollapsed");
    } else {
      options.classList.add("optionsOpen");
      watchList.classList.add("watchListCollapsed");
    }
  });
}
