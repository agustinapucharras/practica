class Product{
    constructor(nombre, precio, descripcion, id, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion
        this.id = id;
        this.imagen = imagen;

    }
}

    let product = [
        new Product("samsung", 60000, "Telefono Samsung A13 32gb", 123, "https://s3-sa-east-1.amazonaws.com/saasargentina/NCshkgB2x9kyeJGXbxrt/imagen"),
        new Product("Motorola", 30980, "Motorola 35gb", 457, "https://s3-sa-east-1.amazonaws.com/saasargentina/NCshkgB2x9kyeJGXbxrt/imagen"),
        new Product("Iphone 14 pro max", 200000, "Iphone 14 pro max 256gb", 7589, "https://outtec.com.ar/wp-content/uploads/2023/05/61HHS0HrjpL._AC_SL1500_-jpg.webp")

    ];

    product.forEach(prod => {
        const newProductCard = document.createElement('div')
        newProductCard.id = prod.id;
        //le agrego inf
        newProductCard.classList.add('card', 'm-2');
        newProductCard.style.width = '18rem';
        newProductCard.innerHTML = `
        <img src="${prod.imagen}" class="card-img-top img-producto" alt="...">
        <div class="card-body">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">${prod.descripcion}</p>
          <span href="#" class="text-danger"><strong>$ ${prod.precio}</strong></span>
          <br>
          <button class="btn btn-primary my-4" onclick="agregarProducto(${product.id})">Agregar al carrito</button>
          <button class="btn btn-danger">Fav</button>
        </div>
        `
        const padreContainer = document.querySelector('main');
        padreContainer.appendChild(newProductCard);
    })


    let carrito = [];
    function agregarProducto(id){
        let product = product.find(prod => prod.id == id)
        carrito.push(product)
        console.log(product)
    }