



function searchUser() {
    const urlrandomuser = "https://randomuser.me/api/";
    fetch(urlrandomuser)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let longitud = data.results[0].location.coordinates.longitude
            let latitud = data.results[0].location.coordinates.latitude
            let nombre = data.results[0].name.first
            let pic = data.results[0].picture.large;

            usuario.innerHTML = `
        <h3>Nombre: ${nombre} </h3>
        <img class="img" src="${pic}">
        <p>Latitud: ${latitud} </p>
        <p>Longitud: ${longitud} </p>
        `;

            container = L.DomUtil.get('map');
                if (container != null){
                    container._leaflet_id=null;
                }

        
            let map = L.map('map').setView([longitud, latitud, 13])
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            

        })
}





/*
buscador.addEventListener('click', async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    usuario.innerHTML = `
        <h3>Nombre: ${user.name.first} ${user.name.last} </h3>
        <img class="img" src="${user.picture.large}">
        <p>Latitud: ${user.location.coordinates.latitude} </p>
        <p>Longitud: ${user.location.coordinates.longitude} </p>
    `;
});
*/