/*

    sumar 2 números con retaso de 2 segundos

*/
/*
let numero1 = parseInt(prompt("Dime el primer numero"))
let numero2 = parseInt(prompt("Dime el segundo numero"))

const sumar = async(num1, num2) => {
     
    await setTimeout(()=> {
        console.log(num1 + num2)
    }, 2000)
    
}

sumar(numero1, numero2)

*/

/*

    Mostrar una imagen aleatoria cada 3 segundos con la siguiente api
    https://picsum.photos/200/300?x=
    
*/

/*
const url = 'https://picsum.photos/200/300?x='
const container = document.getElementById('imgContainer')


let img = document.createElement('img')
container.appendChild(img)

setInterval(()=> {
    let random = Math.floor(Math.random() * 100)
    
    img.src = url + random

}, 3000)
*/
    

/* 

    Mostrar titulo e imagen de las peículas más populares con el siguiente endpoint
    https://api.themoviedb.org/3/movie/popular?api_key=a3d7f49bca7bbd3f64cacbed37fec85b&language=es-ES&page=1
    https://image.tmdb.org/t/p/w185 

*/

const container = document.getElementById('moviesContainer')
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=a3d7f49bca7bbd3f64cacbed37fec85b&language=es-ES&page=1'
const urlImg = "https://image.tmdb.org/t/p/w185"

const getMovies = async () => {
    try {
        let result = await axios.get(url)
        showMovies(result.data.results)
    } catch (error) {
        console.error(error)
    }

}

const showMovies = (movies) => {
    movies.map((movie)=>{
        console.log(movie)
        container.innerHTML += `
            <h2>${movie.title}</h2>
            <img src="${urlImg}${movie.poster_path}"/>
        
        `
    })
}

getMovies()