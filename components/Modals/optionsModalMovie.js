/**
 * Crea un boton desplegable de opciones flotante en la parte inferior derecha
 * @param {element} footerModal Elemento HTML
 * @param {object} movie JSON peliculas
 */
export function optionsModal(footerModal, movie) {
  const btnSeeLater = document.createElement("button");
  //Evento para guarda la pelicula en la lista de ver despues
  btnSeeLater.addEventListener("click", () => {
    localStorage.setItem(movie.title, movie.poster_path);
    //Se cambia el boton para indicar que fue añadida
    btnSeeLater.innerHTML = "✅ Añadida";
    btnSeeLater.className = "btnSeeLaterAdded";
  });
  //Cada vez que se abre la movie se verifica si esta añadida
  if (Object.keys(localStorage).includes(movie.title)) {
    btnSeeLater.innerHTML = "✅ Añadida";
    btnSeeLater.className = "btnSeeLaterAdded";
    footerModal.appendChild(btnSeeLater);
  } else {
    btnSeeLater.innerHTML = "📅 Ver despues";
    btnSeeLater.className = "btnSeeLater";
    footerModal.appendChild(btnSeeLater);
  }
  //Aun no se que hara quiza ver video en yt
  const aunNoSe = document.createElement("button");
  aunNoSe.className = "aunNoSe";
  footerModal.appendChild(aunNoSe);
}
