//Escribe un programa quecree un objeto CUENTA con la sisguientes propiedades:
//Una propiedad titular
//Una propiedad saldo, teniendo como valor inicial 0
//Un metodo Ingresar() que permita ingresar dinero a la cuenta, pasando la cantidad como parametro
//Un metodo Extraer() que me permita retirar dinero, la cantidad pasada como parametro
//Un metodo Informar() que retorne la informacion dele estado de cuenta


    class Cuenta{
        constructor(titular){
            this.id = parseInt(Math.random()*10000);
            this.titular = titular;
            this.saldo = 0;
        }

        ingresar(monto){
            if(monto > 0){
                this.saldo = this.saldo + monto;
                console.log(`Tu saldo actual es: ${this.saldo}`)
            }else if(isNaN(monto)){
                console.log("Solo se admiten numeros")
            }else{
                console.log("Ingrese un monto mayor a 0")
            }
        }

        retirar(monto){
            if(monto > 0 && this.saldo >= monto){
                this.saldo = this.saldo - monto;
                console.log(`Tu saldo actual es: ${this.saldo}`)
            }else if(isNaN(monto)){
                console.log("Solo se admiten numeros")
            }else{
                console.log("Saldo insuficiente o monto invalido")
            }
        }
        

        informar(){
            console.log(`El saldo de la cuenta ${this.id} a nombre de ${this.titular} es de ${this.saldo}`)
        }
    }

    let agus = new Cuenta("agustina pucharras");