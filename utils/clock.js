// This function render a Clock
export const dClock = () => {
    // Var for save the reference
    let timer
    document.addEventListener('click', (e) => {
        // Save the elements
        const clock = document.getElementById('clock')
        const start = document.getElementById('start')
        const stop = document.getElementById('stop')
        // If is the start button
        if (e.target.id === 'start') {
            // Saved the reference for clear after
            timer = setInterval(() => {
                let time = new Date().toLocaleTimeString()
                // Added title with the time
                clock.innerHTML = `<h3>${time}</h3>`
            })
            // Enable and disable buttons
            start.toggleAttribute('disabled')
            stop.toggleAttribute('disabled')
        }
        // If is the stop button 
        if (e.target.id === 'stop') {
            // Clear interval and div
            clearInterval(timer)
            clock.innerHTML = null
            // Enable and disable buttons
            stop.toggleAttribute('disabled')
            start.toggleAttribute('disabled')
        }
    })
}