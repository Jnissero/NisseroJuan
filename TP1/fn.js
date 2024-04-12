function buscar() {
    let valor = document.getElementById("number").value;

    fetch('https://rickandmortyapi.com/api/character/' + value)
        .then(response => response.json())
        .then(data => {
            console.log('El genero es: ', data.gender);

            document.getElementById('valor').innerHTML = ''
        })
        .catch(
            error => {
                console.error('Error: ', error);
            });

}