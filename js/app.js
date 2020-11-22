let search = document.querySelector('.go');

search.addEventListener('click', searchMovie);

function searchMovie(){
    movieName = search.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.omdbapi.com/?apikey=e4db3ced&t=' + movieName);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let movie = JSON.parse(xhr.responseText);
            console.log(movie);
            if (movie.Response === "True") {
                document.querySelector('h2').innerHTML = movie.Title;
                document.getElementById('director').innerHTML = "Director: " + movie.Director;
                document.getElementById('imdb').innerHTML = "Imdb: " + movie.imdbRating;
                document.getElementById('pictures').innerHTML = "<img src=\"" + movie.Poster + "\">";
            } else {
                alert("There is no movie with that name.");
            }
        }
    }
    xhr.send();
}