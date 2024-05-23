
export const Header = function() {

    const header = document.createElement('header')
    const logo = document.createElement('img')
    logo.setAttribute('src', '/images/logo.svg')
    const score = document.createElement("strong")
    score.textContent = "score: 15"

    header.appendChild(logo)
    header.appendChild(score)
    return header
}
