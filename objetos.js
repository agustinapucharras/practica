let person = {
    name: "agus",
    age: 21,
    children: false,
    hobbie: "programar",
    pet: [{
        name: "polo",
        age: 3
    },{
        name: "lion",
        age: 15
    }],

    saludar: function(){
        console.log("Hola")
    }
}

//OBJETOS A PARTIR DE FUNCIONES CONSTRUCTORAS
 
    function Equipo(nombre, colores, cantidad){
        this.nombre = nombre;
        this.colores = colores;
        this.cantidad = cantidad;
    }

    let atletico = new Equipo("Atletico Tucuman", ["azul" , "blanco"], 300);
    let sanMartin = new Equipo("San Martin",  ["rojo" , "blanco"], 500);
    //console.log(atletico)


    //CLASES

    class Pais{
        constructor(nombre, cantidad){
            this.nombre = nombre;
            this.cantidad = cantidad;
        }
    }

    const arg = new Pais("argentina", 5000);
    const brasil = new Pais ("brasil", 6000);


    //EJERCITANDO

    let productos = [
        {id: 1, nombre: "fideos", marca:"Rivoli", precio:200},
        {id: 2, nombre: "arroz", marca:"Mostacho", precio:900},
        {id: 3, nombre: "salame", marca:"Paladini", precio:500}

    ]

    //CHALLENGE

    //CREAR UN ARREGLO DE OBJETOS QUE CONTENGA DATOS DE PELICULAS COMO TITULO,GENERO,AÑO,SINOPSIS,CREAR UNA FUNCION QUE PERMITA MOSRAR EN UNA LISTA CADA PELOCULA CON SUS DATOS

    let peliculas = [
        {nombre:"El señor de los anillos", genero: ["terror", "adolescentes"], año:2012, sinopsis:"Un chico malo"},
        {nombre:"Love rosie", genero: ["amor", "familiar"], año:2024, sinopsis:"Un chica que se enamora"},
        {nombre:"Los juegos del hambre", genero: ["batalla", "adolescentes"], año:2007, sinopsis:"Guerra de adolescentes"},
        {nombre:"Camino", genero: ["enfermedad", "tristeza"], año:2017, sinopsis:"Una chica que se enferma"}
    ]

        function listar(){
            let i;
            for(i=0; i<=peliculas.length; i++)
            {
                console.log("Nombre: "+peliculas[i].nombre+"Genero: "+peliculas[i].genero+ "Año: "+peliculas[i].año+ "Sinopsis: "+peliculas[i].sinopsis)
            }
        }