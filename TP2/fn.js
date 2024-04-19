const formulario = document.getElementById('formulario');
const resultadosDiv = document.getElementById('resultados');

function fetchCharacter(id) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => data);
}

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const id1 = document.getElementById('id1').value;
  const id2 = document.getElementById('id2').value;

  fetchCharacter(id1)
    .then(personaje1 => {
      fetchCharacter(id2)
        .then(personaje2 => {
          mostrarResultados(personaje1, personaje2);
        })
        .catch(error => {
          mostrarError(error, 'Error al buscar el segundo personaje');
        });
    })
    .catch(error => {
      mostrarError(error, 'Error al buscar el primer personaje');
    });
});



function mostrarResultados(personaje1, personaje2) {
  const html = `
        <div class="box-personaje">
          <article>
            <h2>${personaje1.name}</h2>
            <img class="imagen" src="${personaje1.image}">
            <ul>
                <li>Especie: ${personaje1.species}</li>
                <li>Género: ${personaje1.gender}</li>
                <li>Estado: ${personaje1.status}</li>
                <li>Ubicación: ${personaje1.location.name}</li>
            </ul>
          </article>
        
            <div class="msj-genero">
              <p><strong>Comparación de género:</strong></p>
                <div>
                 <p id="mensajeGenero"></p>
                </div>
            </div>

          <article>
            <h2>${personaje2.name}</h2>
            <img class="imagen" src="${personaje2.image}">
            <ul>
                <li>Especie: ${personaje2.species}</li>
                <li>Género: ${personaje2.gender}</li>
                <li>Estado: ${personaje2.status}</li>
                <li>Ubicación: ${personaje2.location.name}</li>
            </ul>
          </article>

         
        </div>
          
            
        `;
  resultadosDiv.innerHTML = html;

  if (personaje1.gender === personaje2.gender) {
    mensajeGenero.textContent = "Los personajes son del mismo género.";
  } else {
    mensajeGenero.textContent = "Los personajes no son del mismo género.";
  }
}

function mostrarError(error, mensaje) {
  const html = `<p class="error">${mensaje}: ${error.message}</p>`;
  resultadosDiv.innerHTML = html;
}