const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmU1MmQ0YmUzZDAwMTU4NDYwNGMiLCJpYXQiOjE2NjgxNjkyODEsImV4cCI6MTY2OTM3ODg4MX0.ah3cJzB8DMi3Fl-ak89rzP6BN7Gfy2KD58ICeoa08hc";

const getMovies = async () => {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/api/movies", {
      headers: { Authorization: `Bearer ${token}` },
    });
    let genres = await res.json();
    console.log(genres);
  } catch (error) {}
};

const getHorror = async () => {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/horror",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    let horrorFlix = await res.json();
    console.log(horrorFlix);
    await renderHorror(horrorFlix);
  } catch (error) {}
};

const getComedy = async () => {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/comedy",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    let funnyFlix = await res.json();
    console.log(funnyFlix);
    renderComedy(funnyFlix);
  } catch (error) {}
};

const getAccion = async () => {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/accion",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    let accions = await res.json();

    renderTv(accions);
  } catch (error) {}
};

function renderHorror(Item) {
  const carousel = document.getElementById("horrorFlix");
  const carousel2 = document.getElementById("horrorFlix2");

  Item.forEach((Item) => {
    const movieSlide = document.createElement("div");
    movieSlide.classList.add("col-md-2", "m-0");
    movieSlide.innerHTML = `<div class="col-12 m-0" style="height:200px">
        <a href="backOffice.html?id=${Item._id}&name=${Item.name}&category=${Item.category}&description=${Item.description}&image=${Item.imageUrl}'"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
        </div>`;
    carousel.appendChild(movieSlide);

    const movieSlide2 = document.createElement("div");
    movieSlide2.classList.add("col-md-2", "m-0");
    movieSlide2.innerHTML = `<div class="col-12 m-0" style="height:200px">
        <a href="backOffice.html?id=${Item._id}&name=${Item.name}&category=${Item.category}&description=${Item.description}&image=${Item.imageUrl}'"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
       </div>`;
    carousel2.appendChild(movieSlide2);
  });
}
function renderComedy(Item) {
  const carousel = document.getElementById("funnyFlix");
  const carousel2 = document.getElementById("funnyFlix2");

  Item.forEach((Item) => {
    const movieSlide = document.createElement("div");
    movieSlide.classList.add("col-md-2", "m-0");
    movieSlide.innerHTML = `<div class="col-12 m-0" style="height:200px">
    <a href="backOffice.html?id=${Item._id}&name=${Item.name}&category=${Item.category}&description=${Item.description}&image=${Item.imageUrl}'"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
    </div>`;
    carousel.appendChild(movieSlide);

    const movieSlide2 = document.createElement("div");
    movieSlide2.classList.add("col-md-2", "m-0");
    movieSlide2.innerHTML = `<div class="col-12 m-0" style="height:200px">
    <a href="backOffice.html?id=${Item._id}&name=${Item.name}&category=${Item.category}&description=${Item.description}&image=${Item.imageUrl}'"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
    </div>`;
    carousel2.appendChild(movieSlide2);
  });
}
function renderTv(Item) {
  const carousel = document.getElementById("accion1");
  const carousel2 = document.getElementById("accion2");

  Item.forEach((Item) => {
    const movieSlide = document.createElement("div");
    movieSlide.classList.add("col-md-2", "m-0");
    movieSlide.innerHTML = `<div class="col-12 m-0" style="height:200px">
        <a href="backOffice.html?id=${Item._id}&name=${Item.name}&category=${Item.category}&description=${Item.description}&image=${Item.imageUrl}'"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
        </div>`;
    carousel.appendChild(movieSlide);

    const movieSlide2 = document.createElement("div");
    movieSlide2.classList.add("col-md-2", "m-0");
    movieSlide2.innerHTML = `<div class="col-12 m-0" style="height:200px">
        <a href="backOffice.html?id=${Item._id}&name=${Item.name}&category=${Item.category}&description=${Item.description}&image=${Item.imageUrl}'"><img class="movie-cover img-fluid m-0" style="width:100%; height:100%; object-fit:cover;" src="${Item.imageUrl}" /></a>
        </div>`;
    carousel2.appendChild(movieSlide2);
  });
}

const loadPage = async () => {
  getMovies();
  await getHorror();
  await getComedy();
  await getAccion();
};

let index = loadPage();
