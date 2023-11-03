const searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
/**
 * Obtiene los caracteres ingresados en el input y busca si se encuentran
 * en los titulos de peliculas.
 * @param {object} movies Estructura de datos
 */
export function search(movies) {
  //Evento para escuchar si cambia el valor en el input
  searchForm.addEventListener("input", (e) => {
    //Valor del input convertido en minusculas
    const letters = e.target.value.toLowerCase();
    //Filtra cada elemento en `movies` determinando la propiedad `titulo`
    //  coincide con `letters` y lo agrega como valor a una constante
    const movieSearch = movies.filter((movie) =>
      movie.title.toLowerCase().includes(letters)
    );

    filterCards(movieSearch);
  });
}
/**
 * Filtra las `cards` si el id no coincide con la propiedad `title`
 * de `moviesSearch`, ocultandolas con una clase.
 * @param {object} movieSearch Estructura de datos
 */
function filterCards(movieSearch) {
  const cards = document.querySelectorAll(".card");

  //Obtiene un arreglo nuevo con todos los `title` de `movieSearch`
  const titles = movieSearch.map((movie) => movie.title);

  //Recorre c/u de los elementos en `cards` y oculta el elemento (`card`)
  //  que no coincida con algun valor de de `titles`
  cards.forEach((card) => {
    if (!titles.includes(card.id)) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
}
