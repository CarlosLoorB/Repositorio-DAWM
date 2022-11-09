window.onload = function () {

    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

    fetch(url)
        .then(response => response.json())
        .then(obj => {
            let tabla = obj;
            for (let i = 0; i < 7; i++) {
                let elementoAct = tabla[i];
                let filaArmada = document.createElement("tr");
                let fila = "<tr><td>" + elementoAct.name + "</td><td>" + elementoAct.current_price + "</td><td>" + elementoAct.market_cap + "</td></tr>";
                filaArmada.innerHTML = fila;
                document.getElementById("cuerpoTabla").appendChild(filaArmada);
            }
        }
        )
        .catch(error => {
            document.getElementById('respuesta').innerHTML = JSON.stringify(error.message)
        })

}