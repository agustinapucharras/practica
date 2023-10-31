let familiares = ["mirian", "julio", "lucas", "gonzalo", "agustina"];

//FUNCION PARA ELIMINAR UN USUARIO

function eliminarUsuario(){

let usuarioAEliminar = prompt("Ingrese el usuario que desea eliminar").toLowerCase();

let incluye = familiares.includes(usuarioAEliminar);

if(incluye){
    let posicion = familiares.indexOf(usuarioAEliminar);
    familiares.splice(posicion,1)
    console.log(familiares)
}
else{
    console.log("ese usuario no pertenece a este array")
}
}

//FUNCION PARA EDITAR USUARIOS

function editarUsuario(){

    let usuarioAEliminar = prompt("Ingrese el usuario que desea eliminar").toLowerCase();

    let usuarioAEditar = prompt("Que usuario desea agregar?").toLowerCase();

    let incluye = familiares.includes(usuarioAEliminar);

    if(incluye){
        let posicion = familiares.indexOf(usuarioAEliminar);
        familiares.splice(posicion,1,usuarioAEditar)
        alert("usuario editado correctamente")
        console.log(familiares)
    }
    else{
        alert("no se encuentra a ese usuario")
    }

}


//1-Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
/*
    let cadena = prompt("Ingrese una cadena de texto");

    let cadenaModificada = cadena.split(" ");
    
    console.log(cadenaModificada.join(" - "));
*/

//2-Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

/*let cadena = prompt("Ingrese una cadena de texto");

let cadenaModificada = cadena.split(" ");
console.log(cadenaModificada.reverse());*/

//FUNCIONES CALL BACK son funciones que se pasan como argumento de otras funciones

function saludo(nombre){
    alert("Hola "+nombre);
}

function despedir(nombre){
    alert("Chau "+nombre)
}

function nameUser(funcion){
    let name = prompt("como es tu nombre?")
    funcion(name)
}

nameUser(saludo)
nameUser(despedir)

//METODOS FIND, FILTER, FOR EACH, MAP

const edadesDataBase = [23, 90, 43, 76,38, 10];

function mayores(edad){
    /*if(edad >= 25){
        console.log(edad)
        }*/

    
}
//METODO FILTER busca todos los elementos que cumplan con esa condicion
const respMayores = edadesDataBase.filter(edad => edad >= 25);
console.log(respMayores);

//METODO FIND muestra el primer el elemento que cumpla con esa condicion

const respMayores3 = edadesDataBase.find(x => x>=25);
console.log(respMayores3)

//METODO MAP agarra todo el array y le hace el cambio de la condicion y lo guarda

const en20Anios = edadesDataBase.map(y => y +20);
console.log(en20Anios)

//METODO FOR EACH lo cambia pero no lo guarda al original

const en30anios = edadesDataBase.forEach(edad => console.log(edad+30))