
document.getElementById('searchButton').addEventListener('click', searchMovie)

let api_key = '5644d957072f433f494e07506219f660'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w500'
let resultsDiv = document.getElementById('results')

function searchMovie(params) {
    resultsDiv.innerHTML = 'CARGANDO...'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}&lang=es`)
    .then(answer => answer.json())
    .then(answer => displayMovie(answer.results))
}

function displayMovie(movies) {
    resultsDiv.innerHTML=''

    if (movies.length === 0) {
        resultsDiv.innerHTML = '<p> No se encontraron resultados para su busqueda </p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releasedDate = document.createElement('p')
        releasedDate.textContent = `La fecha de lanzamiento es: ${movie.release_date}`

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releasedDate)
        movieDiv.appendChild(overview)

        resultsDiv.appendChild(movieDiv)
    });

}