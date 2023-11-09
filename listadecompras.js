//agregar un producto a la lista(usar un bucle que permita seguir ingresando hasta dejar el prompt vacio o presionar cancelar)
//listar todos los productos de la lista
//borrar un producto de la lista
//filtrar un producto por una o varias letras(ingresar el termino a filtrar con un prompt)

let productos = [];

function agregarProductos(){
    let productAAgregar;
    
    while(true){
        productAAgregar = prompt("Ingrese los productos");
        if(productAAgregar ==null){
            break;
        }
        productos.push(productAAgregar);
        
    }

}

function carrito(){
    alert("Los productos elegidos son: \n" +productos.join(" \n"))

}

function borrarProducto(){
    let productAEliminar = prompt("Que producto desea eliminar?").toLowerCase();
    if(productos.find(prod => prod == productAEliminar)){
       let posicion =  productos.indexOf(productAEliminar);
        productos.splice(posicion,1);
    }
    else{
        alert("Lo sentimos, ese producto no fue elegido")
    }
}

function buscarProducto(){

    let prodABuscar = prompt("Ingrese el producto a buscar");
    let resultado = productos.filter(prod => prod.includes(prodABuscar));
    let cantidad = resultado.length;
   alert(" "+cantidad+" resultados para tu busqueda: "+resultado)
}

