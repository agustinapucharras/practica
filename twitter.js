function enviarTweet(event) {
    event.preventDefault();
    const tweet = document.getElementById('tweet'); //traigo al textarea
    const tweetText = tweet.value; //obtengo el valor del twxtarea y lo guardo
    const newTweet = document.createElement('div'); //creo un div para cada tweet
    const idTweet = new Date().getTime(); //creo ids
    newTweet.id = idTweet; //asigno id a cada div
    newTweet.innerHTML = ` 
    <p>${tweetText}</p>
    <button class="btn btn-danger d-block ms-auto" onclick="eliminarTweet(${idTweet})">Eliminar tweet</button>
    `
    newTweet.classList.add("text-light", "bg-dark", "p-5", "my-2");
    const tweetPadre = document.querySelector(".contenedor-tweet"); //traigo al contenedor del html
    tweetPadre.appendChild(newTweet); //pongo adentro de ese div a cada tweet

    document.querySelector("form").reset(); //elimino lo q ya esta escrito en el form
}

function eliminarTweet(id) {
    const tweetToDelete = document.getElementById(id);
    tweetToDelete.remove();
}