import './style.css'
import { Header } from './header'
import { MainGame } from './game'

const app: HTMLDivElement | null = document.querySelector("#app")

app!.appendChild(Header())
app!.appendChild(MainGame())
