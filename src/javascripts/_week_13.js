import "bootstrap"

export function getTopTenMovies() {
    fetch("/top10.json").then(function (response) {
        if (response.ok) {
            return response.json()
        } else {
            throw Error("API call failed!!!!")
        }
    }).then(function (movies) {

        for (let movie of movies) { let movieHTML = `
            <div class="card">
                <img src="${movie.poster}" alt="User Avatar from GitHub" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${movie.title} / ${movie.year}</h5>
                    <p class="card-text">
                        ${movie.plot}
                        <strong>Rating: ${movie.rating}</strong>
                        ${movie.vote}
                    </p>
                </div>
            </div>
            `

            let col = document.createElement("div")
            col.classList.add('col')
            col.innerHTML = movieHTML

            let grid = document.querySelector(".movies")
            grid.appendChild(col)

        }

    }).catch(function (error) {
        console.log(error)
        document.querySelector(".movies").innerHTML = `
        <p>Failed to download the requested data</p>
        `
    })
}
getTopTenMovies()