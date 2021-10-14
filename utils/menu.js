// This function add or remove the className no-panel
export const hamburgerMenu = () => {
    // Listening the click
    document.addEventListener('click', (e) => {
        // we see if the click it was on the circle or bars
        if (e.target.matches('.hamburger') || e.target.matches('.hamburger *')) {
            // We located the element to change
            const panel = document.querySelector('.panel')
            // Add or remove the class
            panel.classList.toggle('no-panel')
        }
        // Remove the class
        if (e.target.matches('.menu a')) {
            // We located the element to change 
            const panel = document.querySelector('.panel')
            // Delete the class
            panel.classList.remove('no-panel')
        }
    })
}