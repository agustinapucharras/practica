

//CREAR UNA CLASE LISTA DE LIBROS
//debe tener: numero de libros ya leidos, libros que continnuan sin leer, siguiente libro, libro actual, ultimo libro, array con todos los libros

    class ListaLibros {
        constructor(dueño){
            this.dueño = dueño;
            this.libros = [];
            this.leidos = [];
            this.sinLeer = [];
            this.siguiente = null;
            this.actual = null;
            this.ultimo = null;
        }

        agregarLibros(libro){
            this.libros.push(libro);
            if(libro.leido == true){
                this.leidos.push(libro);
            }
            else{
                this.sinLeer.push(libro);
            }
        }

        libroActual(libro){
            if(this.actual == libro){
                console.log(`el libro ${libro} ya es su libro actual`)
            }
            else{
                this.actual = libro;
            }
        }

        finalizarLibro(libro){
            if(this.actual == libro){
                this.leidos.push(libro)
                this.ultimo = libro;
                this.actual = null;
            }
        }

        siguienteLibro(){
           let posicionActual = this.libros.indexOf(this.actual);
           this.libros.splice(posicionActual,1);
           this.siguiente = this.libros[0];
        }
    }

        //CREAR UNA CLASE LIBRO
//debe tener: titulo, genero,autor booleano si ya esta leido

class Libro {
    constructor(titulo, genero, autor, leido){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = false;
    }
}

let libroAgus = new ListaLibros("agustina")
let principito = new Libro("el principito", "infantil", "ricardo darin", true);
let cenicienta = new Libro("cenicienta", "infantil", "disney", false);




//crear metodo para añadir libros a la lista de libros
//colocar un libro en leido actual
//crear una funcion apra finalizar el libro
//crear una funcion para colocar cual es el siguiente libro

