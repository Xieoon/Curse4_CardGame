import template from './start_screen.hbs'
import gameScreen from './game_screen.js'

export default function startScreen() {
    const html = template()
    document.body.innerHTML = html

    Array.from(document.querySelectorAll('.window_choice-button')).forEach(
        (el) => {
            el.onclick = (event) => {
                window.store.dificulty = event.target.id * 6
            }
        }
    )

    document.querySelector('.button-start').onclick = () => {
        if (window.store.dificulty) {
            gameScreen()
        }
    }
}
