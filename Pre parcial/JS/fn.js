
let arrayNumeros = []
let contadorIngresos = 1;

function guardarInput() {
    const numero = document.getElementById('numero').value;

    arrayNumeros.push(Number(numero));
    console.log(arrayNumeros)

    if (arrayNumeros.length == 5) {
        alert('ya ingresó 5 números');

        let numeroMaximo = arrayNumeros[0]

        for (i = 1; i < arrayNumeros.length; i++, contadorIngresos++) {
            if (arrayNumeros[i] > numeroMaximo) {
                numeroMaximo = arrayNumeros[i];
            }
        }
        console.log('el numero maximo es: ', numeroMaximo);
        console.log(contadorIngresos);
    }
    if (contadorIngresos === 5) {
        boton.style.display = 'none';
    }
}






function searchUser() {
    const urlrandomuser = "https://randomuser.me/api/";
    fetch(urlrandomuser)
        .then(response => response.json())
        .then(data => {

            let nombre = data.results[0].name.first
            let pic = data.results[0].picture.large;

            /*  usuario.innerHTML = `
         <h3>Nombre: ${nombre} </h3>
         <img class="img" src="${pic}">
         `;    */
        })
}

function buscarPersonaje(numeroMaximo) {
    return fetch(`https://rickandmortyapi.com/api/character/${numeroMaximo}`)
        .then(response => response.json())
        .then(data => data);
}
const persona = searchUser(data);

const personaje = buscarPersonaje(data);
if (personaje.species === 'Human') {

    const html = `
            <h2>${personaje.name}</h2>
            <img class="imagen" src="${personaje.image}"></img>

            <h2>Nombre: ${persona.nombre} </h2>
            <img class="img" src="${pic}">
    
        `;
        resultadosDiv.innerHTML = html;

}





