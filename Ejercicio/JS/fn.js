let contadorDePersonajesIngresados = 0;
let idsDePersonajesPorGrupos = { 1: [], 2: [] }

function guardarPersonaje(numero) {
  const htmlGrupo = document.getElementById('grupo'+numero).value;

  if (verificarNumero(htmlGrupo)) {
    console.log('Cantidad de IDs ingresados:', contadorDePersonajesIngresados);
    idsDePersonajesPorGrupos[1].push(parseInt(htmlGrupo));
    contadorDePersonajesIngresados++;
    console.log("array de IDs del primer grupo ", idsDePersonajesPorGrupos[1]);


    const btn1 = document.getElementById('btn'+numero);

    if (idsDePersonajesPorGrupos[1].length == 3) {
      alert('ya ingresó 3 números');
      btn1.style.display = 'none';
    }
  }
  else alert('El minimo permitido es 1 y el máximo permitido es 826')
  mostrarGrupos(idsDePersonajesPorGrupos)
}

function verificarNumero(numero) {
  return 1 <= numero && numero < 827;
}

 function mostrarGrupos(personajesIdsAgrupados) {
  if (contadorDePersonajesIngresados === 6) {

    obtenerPersonajesPorGrupos(personajesIdsAgrupados,(personajesPorGrupo) => {
    
    Object.keys(personajesPorGrupo).forEach(grupo => {
      const divGrupo = document.getElementById(`divGrupo${grupo}`)
      const htmlPersonajes = personajesPorGrupo[grupo].map(personaje => 
        `<h3>${personaje.name}</h3>
           <img src= ${personaje.image}>`
      ).join('')
      console.log(htmlPersonajes)
      divGrupo.innerHTML = `
                <div id="grupo${grupo}">
                  <h2>Grupo ${grupo}</h2>
                   ${htmlPersonajes}
                </div>
                `;
    }
    )})
  }
}