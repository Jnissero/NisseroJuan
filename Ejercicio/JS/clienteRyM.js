

function obtenerPersonajesPorGrupos(idsDePersonajesPorGrupos,callback) {
  const idsPersonajes = Object.values(idsDePersonajesPorGrupos)
  return fetch(`https://rickandmortyapi.com/api/character/${idsPersonajes.join()}`)
    .then(response => response.json())
    .then(personajes => {
      const a = personajesAgrupados(personajes, idsDePersonajesPorGrupos)
      
      callback(a) 
    }
  )
}
  


function encontrarPersonaje(personajes, id) {
  return personajes.find(personaje => personaje.id === id)
}

function obtenerPersonajes(idsPersonajes, personajes) {
  return idsPersonajes.map(id => encontrarPersonaje(personajes, id))
}

function personajesAgrupados(personajes, idsDePersonajesPorGrupos) {

  let personajesAgrupados = {}
  const grupos = Object.keys(idsDePersonajesPorGrupos)

  grupos.forEach(grupo => {
    personajesAgrupados[grupo] = obtenerPersonajes(idsDePersonajesPorGrupos[grupo], personajes)
  })
  return personajesAgrupados
}




