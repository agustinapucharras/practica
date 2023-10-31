let productos = ["gaseosa", "vino", "soda", "agua", "jugo", "ades"];
let carrito = [];

const agregarProducto = () =>{
    let agregar = prompt("que producto desea llevar?").toLowerCase();

    if(productos.includes(agregar)){
        carrito.push(agregar)
        alert("producto agregado al carrito")
    }else{
        alert("No vendemos ese producto")
    }
}

function mostrarCarrito(){
    alert("Tus productos son "+ carrito.join(" - "))
}

function buscarProducto(){
    let buscar = prompt("que producto desea buscar?").toLowerCase();

    if(carrito.find(product => product == buscar)){ //busca con tal cual
        alert("articulo encontrado!")
    }else{
        alert("producto no encontrado")
    }
}

function buscarCoincidencias(){
    const buscar = prompt("buscar coincidencias").toLowerCase(); //con tan solo una letra encuentra
    const resultado = productos.filter(produ  => produ.includes(buscar));
    alert(resultado)
}

function eliminarProducto()
{
    let articuloAEliminar = prompt("Que producto desea eliminar?");
    if(carrito.find(produc => produc == articuloAEliminar)){
        let posicion = carrito.indexOf(articuloAEliminar)
        carrito.splice(posicion,1)
        alert("Su carrito es: "+carrito)
    }
    
}