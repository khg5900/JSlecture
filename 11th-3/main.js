const movieUl = document.querySelector(".movie-ul");

const API_KEY = "dbd7cf8251c348cadfefc4f7d3b6f189";
const BASE_PATH = "https://api.themoviedb.org/3";

function makeLi(name, src) {
  const li = document.createElement("li");
  const movieImg = document.createElement("img");
  const movieName = document.createElement("div");
  movieImg.src = `https://image.tmdb.org/t/p/original/${src}`;
  movieName.innerText = name;
  li.appendChild(movieImg);
  li.appendChild(movieName);
  movieUl.appendChild(li);
}

async function getMovies() {
  const movieFetch = await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`
  );
  const movieData = await movieFetch.json();
  console.log(movieData);
  movieData.results.forEach((movie) => makeLi(movie.title, movie.poster_path));
}

getMovies();
