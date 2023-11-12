export function notScroll(boolean) {
  const body = document.querySelector("body");
  if (boolean === true) {
    body.classList.add("notScroll");
  } else {
    body.classList.remove("notScroll");
  }
}
