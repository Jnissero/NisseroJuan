const fecha = new Date ();

const anio = fecha.getFullYear();
const mes = fecha.getMonth();
const dia = fecha.getDay();


class Persona {
  constructor (nombre,apellido,dia_nacimiento,mes_nacimiento,anio_nacimiento){
    this.nombre = nombre;
    this.apellido = apellido;
    this.anio_nacimiento = anio_nacimiento;
    this.mes_nacimiento = mes_nacimiento;
    this.dia_nacimiento = dia_nacimiento;
  }

  saludar(){
    console.log(`hola, soy ${this.nombre}`)
  }

  getEdad(){
    let anio = new Date ();
    let edad = anio.getFullYear() - this.anio_nacimiento

    //console.log(`Tiene ${edad} años`)
    return edad;
  }

}



let juan = new Persona ('Juan','Nissero', 27, 5, 1997);
console.log(juan.saludar());
console.log(`Tiene ${juan.getEdad()} años`);



