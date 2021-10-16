// All themes.
const colors = ['red','green','white']
// This function set all elements with attribute data-theme.
const selecTheme = (color) => {
    // Search elements.
    document.querySelectorAll('[data-theme]').forEach(element => {
        // Remove old class.
        element.classList.remove(...colors)
        // Add class 
        element.classList.add(color)
        // Save in local storage.
        localStorage.setItem('theme', color)
    })
}

export const theme = () => {
    // Search the element for select the theme and listen the clicks here.
    document.querySelector('.theme-container').addEventListener('click', (e) => {
        // Validate if exist color in the classList.
        if(e.target.classList[1]) selecTheme(e.target.classList[1])         
    })
    // Listen the load
    document.addEventListener('DOMContentLoaded', () => {
        // If don't have theme, setting white for default.
        if(!localStorage.getItem('theme')) localStorage.setItem('theme', 'white')
        // If have theme saved, call the function with this color to argument.
        selecTheme(localStorage.getItem('theme'))
    })
}