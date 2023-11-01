
//HERENCIA

    class Person{
        constructor(name, age, provincia){
            this.name = name;
            this.age = age;
            this.provincia = provincia;
        }

        saludar(){
            console.log("Hola "+ this.name)
        }
    }

    class Estudiante extends Person{
        constructor(name, age, comision){
            super(name, age);
            this.comision = comision;
        }
    }

    let agus = new Estudiante("agus", 21, "59i");