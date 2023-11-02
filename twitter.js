function enviarTweet(event) {
    event.preventDefault();
    const tweet = document.getElementById('tweet');
    const tweetText = tweet.value;
    const newTweet = document.createElement('div');
    const idTweet = new Date().getTime();
    newTweet.id = idTweet;
    newTweet.innerHTML = `
    <p>${tweetText}</p>
    <button class="btn btn-danger d-block ms-auto" onclick="eliminarTweet(${idTweet})">Eliminar tweet</button>
    `
    newTweet.classList.add("text-light", "bg-dark", "p-5", "my-2");
    const tweetPadre = document.querySelector(".contenedor-tweet");
    tweetPadre.appendChild(newTweet);

    document.querySelector("form").reset(); //elimino lo q ya esta escrito en el form
}

function eliminarTweet(id) {
    const tweetToDelete = document.getElementById(id);
    tweetToDelete.remove();
}