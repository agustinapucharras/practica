class User{
    constructor(id, nombre, email, contraseña){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
}

const users = [
    new User(1, "agus", "pucharra81@gmail.com", 1234),
    new User(2, "polo", "polo@gmail.com", 1234)
]
   /* let users;
    if(localStorage.getItem('users')){
        users = JSON.parse(localStorage.getItem('users'))
    }else{
        const users = [
            new User(1, "agus", "pucharra81@gmail.com", 1234),
            new User(2, "polo", "polo@gmail.com", 1234)
        ]
    }
   
    */



function login(event){
    event.preventDefault()
    const email = document.getElementById('email').value;
    console.log(email)
    const contraseña = document.getElementById('contraseña').value;
    console.log(contraseña)

    const userFound = users.find(user => user.email == email);
    if(userFound){
        const isOk = userFound.contraseña == contraseña;
        if(isOk){
            alertMessage("entro correctamente!");
            window.location.assign(window.location.origin + '/carrito2.html')
        }else{
            alertMessage("clave incorrecta")
        }
        
    }else
    {
        alertMessage("email incorrecto")
    }

    document.querySelector("form").reset(); //elimino lo q ya esta escrito en el form

}

function alertMessage(message){
    let alertMessage = document.createElement('div');
    alertMessage.classList.add('alert', 'alert-danger', 'mt-5');
    alertMessage.setAttribute('role', 'alert');
    alertMessage.innerText = message;
    let contenedor = document.querySelector('form');
    contenedor.appendChild(alertMessage)
}