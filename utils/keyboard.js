// We located the element to move and grund
const ball = document.querySelector('.ball')
const ground = document.querySelector('.ground')
// Var for traslate attribute CSS
let x = 0, y = 0
// Dic with the methods for add or subtract in x,y
const MOVE_DIRECTION = {
    ArrowLeft() {
        if (ball.getBoundingClientRect().left > ground.getBoundingClientRect().left) --x
    },
    ArrowUp() {
        if (ball.getBoundingClientRect().top > ground.getBoundingClientRect().top) --y
    },
    ArrowRight() {
        if (ball.getBoundingClientRect().right < ground.getBoundingClientRect().right) ++x
    },
    ArrowDown() {
        if (ball.getBoundingClientRect().bottom < ground.getBoundingClientRect().bottom) ++y
    }
}
export const move = (e) => {
    // Delete scroll.
    e.preventDefault()
    MOVE_DIRECTION[e.code](e)
    // Changed the style in the ball element
    ball.style.transform = `translate(${x * 5}px,${y * 5}px)`
}