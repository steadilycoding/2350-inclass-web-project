import "bootstrap"

export function getGitHubUsers(url) {
    fetch(url).then(function (response) {
        if (response.ok) {
            return response.json()
        } else {
            throw Error("API call failed!!!!")
        }
    }).then(function (users) {

        for (let user of users) { let userHTML = `
            <div class="card">
                <img src="${user.avatar_url}" alt="User Avatar from GitHub" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${user.login}</h5>
                    <p class="card-text">URL: <a href="${user.url}" target="github_user">${user.html_url}</a></p>
                </div>
            </div>
            `

            let col = document.createElement("div")
            col.classList.add('col')
            col.innerHTML = userHTML

            let grid = document.querySelector(".gitHub")
            grid.appendChild(col)

        }

    }).catch(function (error) {
        console.log(error)
        document.querySelector(".gitHub").innerHTML = `
        <p>Failed to download the requested data</p>
        `
    })
}

let uid = Math.ceil(Math.random()*10000 + 1) 


getGitHubUsers("https://api.github.com/users?per_page=10&since=11" + uid)