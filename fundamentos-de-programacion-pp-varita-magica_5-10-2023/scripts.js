// Varita mágica

// Ejercicio 1
const htmlCrazy = document.querySelector('HTML'); 

htmlCrazy.addEventListener("click", function(crazyMouse) {

    crazyMouse.preventDefault()
})

// Ejercicio 2.1

const imagen = document.querySelector('body')

imagen.addEventListener('click', function(event) {

if (event.target.tagName === 'IMG') {

    event.target.src = './assets/abracadabra.gif'
    
  }
})

// Ejercicio 2.2

const parrafo = document.querySelector('p')

parrafo.addEventListener('click', function(event) {

    if (event.target.style.color = 'black') {

        event.target.style.color = 'white';  
        event.target.style.backgroundColor = 'black';  
    } 
});

// Ejercicio 2.3

const fondoBonito = document.querySelector('article')

fondoBonito.addEventListener('click', function(event) {

    if (event.target.tagName === 'article')  {

        style.article.backgroundColor = 'red'
    }
}


)

// Ejercicio 3.1 

const imagen = document.querySelectorAll('body')


   
