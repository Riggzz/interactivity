console.log('hello world')
let message = document.querySelector('#message')
let addBtn = document.querySelector('form')
function addMovie(event) {
    event.preventDefault()
let inputField = document.querySelector('input')
let movie = document.createElement('li')
let movieTitle = document.createElement('span')
movieTitle.addEventListener('click', crossOffMovie)
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    document.querySelector('ul').appendChild(movie)

    inputField = ''
    let deleteBtn = document.createElement('button') 
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
}
addBtn.addEventListener('submit', addMovie)

function deleteMovie(event) {
    event.preventDefault()
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted'
}
    
function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = 'Movie watched'
    } else {
        message.textContent = 'Movie added back'
    }
}





