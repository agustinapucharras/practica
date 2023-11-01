//https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=842:lista-de-eventos-javascript-on-click-dblclick-mouseover-mouseout-change-submit-keypress-cu01159e&catid=78&Itemid=206





//FUNCIONES PARA MANEJAR EL TIEMPO

//setInterval(); // ejecuta una tarea cada determinado lapso de tiempo
//setTimeout(); //ejecuta una funcion pasado un determinado lapso de tiempo una sola vez


function holaMundo() {
    console.log("hola comi")
}

//setInterval( () => holaMundo(),1000)
//setTimeout(() => console.log("holis"), 6000)

//JERCICIO DEL TIEMPO, CREAR UN CONTADOR QUE DESPUES DE LOS 10SEGUNDOS ME MUESTRE EL DESPEGUE

/*  let contador = 10;

  const contadorTiempo = setInterval(() => {
      console.log("despegue en ", +contador)
      contador --
  }, 1000)

  setTimeout(() => {
      clearInterval(contadorTiempo); //corta el setinterval
      console.log("Despegue")
  }, 10000)
*/


//DOM docuemnt object model
//document.body.innerHTML = " "
    //getElementById('') trae un elemento a traves de su id
    //getElementByClassName('') trae LOS elementos qu etengan esa clase
    //querySelector('.clase')

function cambiarTexto() {
    const h2Cambio = document.getElementById('h2cambiar');
    h2Cambio.innerHTML = 'El texto ha sido modificado';
    h2Cambio.style.backgroundColor = 'red';
}

//cambiar fondo

 function cambiarFondo()
{
    const divCambio = document.getElementById('cambioFondo');
    if(divCambio.classList.contains('divPequeño')){
        divCambio.classList.add('divCambiado')
        divCambio.classList.remove('divPequeño')
    }else{
        divCambio.classList.add('divPequeño')
        divCambio.classList.remove('divCambiado')

    }
}

//agregar elementos desde js
    function agregarElemento(){
        const nuevoElemento = document.createElement('div');
        nuevoElemento.classList.add('cuadrado');
        nuevoElemento.innerText = 'hola';
        
        const padreElemento = document.querySelector('.nuevo-elemento');
        padreElemento.appendChild(nuevoElemento)
    }