
let arrayPersonajes1 = [];
let arrayPersonajes2 = [];
let acumuladorArrays = 0;

function guardarPersonaje1() {
    const numero1 = document.getElementById('grupo1').value;

    if (1 <= numero1 && numero1 < 827) {
        arrayPersonajes1.push(parseInt(numero1));
        acumuladorArrays++;
        console.log("array de IDs personajes1: ", arrayPersonajes1);
        console.log('Cantidad de IDs ingresados:', acumuladorArrays);

        const btn1 = document.getElementById('btn1');

        if (arrayPersonajes1.length == 3) {
            alert('ya ingresó 3 números');
            btn1.style.display = 'none';
            //acumuladorArrays = arrayPersonajes1.length;

            var personaje1 = arrayPersonajes1[0];
            var personaje2 = arrayPersonajes1[1];
            var personaje3 = arrayPersonajes1[2];


            mostrarPrimerGrupo(personaje1, personaje2, personaje3);
        }
    }
    else alert('El minimo permitido es 1 y el máximo permitido es 826')
}

function guardarPersonaje2() {
    const numero2 = document.getElementById('grupo2').value;
    if (1 <= numero2 && numero2 < 827) {
        arrayPersonajes2.push(parseInt(numero2));
        acumuladorArrays++;
        console.log("array de IDs personajes2: ", arrayPersonajes2)
        console.log('Cantidad de IDs ingresados:', acumuladorArrays);

        const btn2 = document.getElementById('btn2');

        if (arrayPersonajes2.length == 3) {
            alert('ya ingresó 3 números');
            btn2.style.display = 'none';
            //acumuladorArrays = acumuladorArrays + arrayPersonajes2.length;

            var personaje4 = arrayPersonajes2[0];
            var personaje5 = arrayPersonajes2[1];
            var personaje6 = arrayPersonajes2[2];



            mostrarSegundoGrupo(personaje4, personaje5, personaje6);
        }
    }
    else alert('El minimo permitido es 1 y el máximo permitido es 826')
}


function mostrarPrimerGrupo(personaje1, personaje2, personaje3) {
    if (acumuladorArrays === 6) {
        fetch(`https://rickandmortyapi.com/api/character/${personaje1},${personaje2},${personaje3}`)
            .then(response => response.json())
            .then(data => {

                const divGrupo1 = document.getElementById("divGrupo1")

                var personaje1 = data[0];
                var personaje2 = data[1];
                var personaje3 = data[2];

                divGrupo1.innerHTML = `
                <div id="grupo2">
                    <h3>${personaje1.name}</h3>
                <img src= ${personaje1.image}>

                    <h3>${personaje2.name}</h3>
                <img src= ${personaje2.image}>

                    <h3>${personaje3.name}</h3>
                <img src= ${personaje3.image}>
                
                </div>
                `;

            })
            .catch(error => console.log(error));
    }
}

const arraysConcatenados = arrayPersonajes1.concat(arrayPersonajes2);

function mostrarSegundoGrupo() {
    if (acumuladorArrays === 6) {
        fetch('https://rickandmortyapi.com/api/character/',arraysConcatenados)
            .then(response => response.json())
            .then(data => {

                const divGrupo2 = document.getElementById("divGrupo2")
                
                var personaje4 = data[0];
                var personaje5 = data[1];
                var personaje6 = data[2];

                divGrupo2.innerHTML = `
                <div id="grupo2">
                    <h3>${personaje4.name}</h3>
                <img src= ${personaje4.image}>

                    <h3>${personaje5.name}</h3>
                <img src= ${personaje5.image}>

                    <h3>${personaje6.name}</h3>
                <img src= ${personaje6.image}>
                
                </div>
                `;

            })
            console.log(arraysConcatenados)
            .catch(error => console.log(error));
    }
}