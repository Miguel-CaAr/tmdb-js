const API = "https://api.themoviedb.org/3/movie/popular";
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjNkY2U1NzQ5ZmQ1NTk5OTE1ZWIxMjZmOTNiYzI5MSIsInN1YiI6IjY1NDE2N2M2ZWZlMzdjMDBjNjRkZGUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N19Mh6diCIsLjOdwn2UxuLiC5Kl0y8v3NjM2u-sm7S0",
  },
};
/**
 * Consumo de la API
 * @returns Retorna la respuesta convertida a JSON
 */
export async function api() {
  try {
    const response = await fetch(API, OPTIONS);
    return await response.json();
  } catch (error) {
    return await alert(`Lo sentimos, hay un error:\n${error}`);
  }
}
