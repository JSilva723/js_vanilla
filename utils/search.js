// This function filter the cards.
export const search = () =>{
    // Listen keyup in the search input.
    document.querySelector('.card-filter').addEventListener('keyup', (e) => {
        // Search all cards.
        document.querySelectorAll('.card').forEach(element =>{
            // For each element change the text to lower case and verificate if the input value match and this isn't null.
            element.children[1].textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) && e.target.value !== ' '
                // Add filter class.
                ? element.classList.remove('filter')
                // Remove filter class.
                : element.classList.add('filter')
        })
    })
}