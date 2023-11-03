const searchForm = document.querySelector(".search");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

export function search(movies) {
  searchForm.addEventListener("input", (e) => {
    const letters = e.target.value.toLowerCase();
    const movieSearch = movies.filter((movie) =>
      movie.title.toLowerCase().includes(letters)
    );
    filterCards(movieSearch);
  });
}

function filterCards(movieSearch) {
  const cards = document.querySelectorAll(".card");
  
}
