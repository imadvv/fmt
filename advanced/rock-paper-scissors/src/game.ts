export const MainGame = function(): HTMLElement {

    const main = document.createElement("main")
    main.classList.add("game-board")

    let reset: boolean = false
    let userSelect: boolean = false
    if (!reset || !userSelect) {
        setGameOptions(main)
    }
    return main
}

function setGameOptions(main: HTMLElement): void {

    const GameOptions = ["rock", "paper", "scissors", "lizard", "spock"]

    GameOptions.forEach(option => {

        const buttton = document.createElement("button")
        const img = document.createElement("img")
        img.setAttribute("src", `/images/icon-${option}.svg`)
        buttton.setAttribute("id", option)
        buttton.appendChild(img)
        main.appendChild(buttton)

        buttton.addEventListener("click", getUserOption)
    })

}

function getUserOption(e: Event) {
    const currentTarget = e.currentTarget as HTMLButtonElement

    const userOption = currentTarget.getAttribute("id")


    compure(userOption!)
}

function compure(userOption: string) {

    console.log(userOption)
}

function updateView(userSelect: boolean) {
    return userSelect = true
}



