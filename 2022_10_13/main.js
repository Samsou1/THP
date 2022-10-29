const apiKey = '5af9d8bf';

const main = document.querySelector('main');
const searchBar = document.querySelector('#movieSearchBar');
const form = document.querySelector('form');
const error = document.querySelector('.error');
const modal = document.querySelector('.modal');
const span = document.querySelector(".close");

const getMovies = (search)=> {
  fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search.replace(/ /g, '+')}`)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    if(response['error']){
      error.innerHTML = "No movie found";
    }else{
      buildMovieList(response['Search']);
      buildButtonsEventListeners();
      buildOservers();
    }
  })
  .catch((error) => { 
    console.error(error); 
  });
};

const buildMovieList = (ary) => {
  main.innerHTML = '';
  for(let i = 0; i < ary.length; i ++){
   buildMovie(ary[i]);
  }
}

const buildOservers = () => {
  let movies = document.querySelectorAll(".movie")
  movies.forEach(movie => {
    movieObserver.observe(movie);
  })
}

const movieObserver = new IntersectionObserver((entries) => {
  entries.forEach ((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.remove('hidden')
    }else{
      entry.target.classList.add('hidden')
    }
  })
}, {threshold:0.2})

const buildMovie = (movie)=> {
  main.innerHTML += `
  <div class='d-flex flex-row p-2 border border-primary rounded mb-3 col-10 movie hidden'>
    <img src='${movie['Poster']}'class='col'>
    <div class='col-11 p-2'>
      <h2>${movie['Title']}</h2>
      <br>
      <p>Date of release: ${movie['Year']}</p>
      <button data-imdbid=${movie['imdbID']} type="button" class="btn btn-primary">See more</button>
    </div>
  </div>
  `;
}

const buildButtonsEventListeners = () => {
  let buttons = document.querySelectorAll('main > div > div > button');
  buttons.forEach(button => button.addEventListener('click',function(e){
    getMovieDetails(this.dataset.imdbid);
    e.preventDefault();
  }))
}

form.addEventListener('submit', (e) => {
  getMovies(searchBar.value);
  e.preventDefault();
});

const getMovieDetails = (id) => {
  fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    if(response['error']){
      error.innerHTML = "No movie found";
    }else{
      buildPopUp(response);
    }
  })
  .catch((error) => { 
    console.error(error); 
  });
};

const buildPopUp = (hash) => {
  document.querySelector('.modal-header > h2').innerHTML = hash['Title'];
  document.querySelector('.modal-body > h4').innerHTML = hash['Year'];
  document.querySelector('.modal-body > p').innerHTML = hash['Plot'];
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

span.onclick = function() {
  modal.style.display = "none";
}
