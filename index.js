import { hamburgerMenu } from './utils/menu.js'
import { dClock } from './utils/clock.js'
import { move } from './utils/keyboard.js'
import { theme } from './utils/theme.js'
import { search } from './utils/search.js'


// Add listener of load
document.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu()
    dClock()
    search()
})
// Add listener of keyboard
document.addEventListener('keydown', (e) => {
    // We validate if press arrow key
    if (e.code === 'ArrowLeft' || e.code === 'ArrowUp' || e.code === 'ArrowRight' || e.code === 'ArrowDown') {
        move(e)
    }
})
// Call the function here because we need listen the DOMContentLoaded event again.
theme()