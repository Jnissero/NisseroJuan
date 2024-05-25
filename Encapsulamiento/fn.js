


localStorage.setItem('clave','123');
sessionStorage.setItem('clave','321');

let data = {
    name: 'javier',
    age: 43
}

localStorage.setItem('data', JSON.stringify(data));

let aux = localStorage.getItem('data')

console.log(JSON.parse(aux));



class Persona {
    constructor (name, lastName){
        this.name = name;
        this.lastName = lastName;
    }


    getName (){
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
   
}
let juan = new Persona ('Juan','Nissero');
juan = getName();








class Cliente {
    constructor (nombre, apellido, fechaNacimiento, idCuenta){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.idCuenta = idCuenta;
    }
}


class Cuenta_bancaria {
    constructor(saldo, consultarSaldo, depositar, retirar){
        this.saldo = saldo;
        this.consultarSaldo = consultarSaldo;
        this.depositar = depositar;
        this.retirar = retirar;

        //puede ser que esto no vaya acá
    }
}




consultar_saldo(); 

depositar();  //hasta 1000

retirar(); //si hay saldo suficiente