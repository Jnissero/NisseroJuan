/*
function searchUser() {
    const urlrandomuser = "https://randomuser.me/api/";
    fetch(urlrandomuser)
        .then(response => response.json())
        .then(data => { 
            console.log(data)
        })
}
*/

function buscar() {

    if (document.getElementById("local")) {
        var url = `personas.json`;
    } else if (document.getElementById("internet")) {
        var url = "https://randomuser.me/api/?results=10"
    }


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.length)

            let hombres = 0;
            let mujeres = 0;

            let nombresHombres = [];
            let nombresMujeres = [];

            const females = document.getElementById("females");
            const males = document.getElementById("males");

            //console.log(typeof(`personas.json`))
            for (var i = 0; i < data.length; i++) {

                if (data[i].gender === "female") {

                    mujeres++;
                    nombresMujeres = data[i].name.first;
                    console.log(nombresMujeres);

                    females.innerHTML += `<h2> ${data[i].name.first} </h2>`

                }

                else if (data[i].gender === "male") {
                    hombres++;
                    nombresHombres = data[i].name.first;
                    console.log(nombresHombres);

                    males.innerHTML += `<h2> ${data[i].name.first} </h2>`
                }
            }
        })
}
