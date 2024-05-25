class Persona {
  constructor(name, lastName, age, gender, city, email,dia_nacimiento,mes_nacimiento,anio_nacimiento) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.email = email;
    this.anio_nacimiento = anio_nacimiento;
    this.mes_nacimiento = mes_nacimiento;
    this.dia_nacimiento = dia_nacimiento;
  }

  saludar() {
    console.log(`hola, soy ${this.name}`)
  }
}

function searchUser() {
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      console.log(data)
        const info = data.results;
        let randomuser = new Persona(info[0].name.first, info[0].name.last, info[0].dob.age, info[0].gender, info[0].location.city, info[0].email);
      console.log(randomuser)

      usuario.innerHTML = `
      <h3>Nombre: ${randomuser.name} </h3>
      <h3>Apellido: ${randomuser.lastName} </h3>
      <h3>Edad: ${randomuser.age} </h3>
      <h3>Genero: ${randomuser.gender} </h3>
      <h3>Ciudad: ${randomuser.city} </h3>
      <h3>Email: ${randomuser.email} </h3>
      `;

    })
}


















/*class Cliente extends Persona {
    constructor(nombre,apellido,dni,nacionalidad,fecha_nacimiento,cuenta){
       super(nombre,apellido,dni,nacionalidad,fecha_nacimiento)
       this.cuenta = cuenta;
      }
}

let juan = new Cliente ('Juan','Nissero', 40159300, 'Argentina', 1997, 5)
console.log(juan)
juan.saludar();*/
