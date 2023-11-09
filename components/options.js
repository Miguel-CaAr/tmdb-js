export function options() {
  const options = document.querySelector(".options");
  const seeLater = document.querySelector(".seeLater");
  options.addEventListener("click", () => {
    if (options.classList.contains("optionsOpen")) {
      options.classList.remove("optionsOpen");
      seeLater.classList.remove("seeLaterCollapsed");
    } else {
      options.classList.add("optionsOpen");
      seeLater.classList.add("seeLaterCollapsed");
    }
  });
}
