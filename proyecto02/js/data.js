window.onload = function () {
    let crypto;
    let chosen1;
    let chosen2;
    let chosen3;
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
            tabla.forEach(function (crypto) {
                let lineaContenido1 = `<option value="${crypto.id}">${crypto.name}</option>`
                let lineaContenido2 = `<option value="${crypto.id}">${crypto.name}</option>`
                let lineaContenido3 = `<option value="${crypto.id}">${crypto.name}</option>`
                document.getElementById("drop3").innerHTML += lineaContenido3;
                document.getElementById("drop2").innerHTML += lineaContenido2;
                document.getElementById("drop1").innerHTML += lineaContenido1;
            });

        }
        )
        .catch(error => {
            console.log(JSON.stringify(error.message))
        })

}

const selectElement1 = document.querySelector('#drop1');
selectElement1.addEventListener('change', (event) => {
    chosen1 = event.target.value
    console.log(chosen1)
    let url1 = "https://api.coingecko.com/api/v3/coins/" + chosen1 + "?community_data=true&sparkline=true"
    fetch(url1)
        .then(response => response.json())
        .then(obj => {
            let tabla = obj;
            let valor = tabla.market_data.market_cap.usd
            document.getElementById("marketcap1").textContent = "$" + valor
            let tablaSpark = tabla.market_data.sparkline_7d.price
            let grafico =
                `<table class="charts-css line" id="my-chart">

            <tbody>
              <tr>
                <td style="--start: ${tabla.market_data.sparkline_7d.price[0]}; --size: ${tabla.market_data.sparkline_7d.price[1]}"> <span class="data"> 1 </span> </td>
              </tr>
              <tr>  
                <td style="--start: ${tabla.market_data.sparkline_7d.price[1]}; --size: ${tabla.market_data.sparkline_7d.price[2]}"> <span class="data"> 2 </span> </td>
              </tr>
              <tr>
                <td style="--start: ${tabla.market_data.sparkline_7d.price[2]}; --size: ${tabla.market_data.sparkline_7d.price[3]}"> <span class="data"> 3 </span> </td>
              </tr>
              <tr>
                <td style="--start: ${tabla.market_data.sparkline_7d.price[3]}; --size: ${tabla.market_data.sparkline_7d.price[4]}"> <span class="data"> 4 </span> </td>
              </tr>
              <tr>
                <td style="--start: ${tabla.market_data.sparkline_7d.price[4]}; --size: ${tabla.market_data.sparkline_7d.price[5]}"> <span class="data"> 5 </span> </td>
              </tr>
              <tr>
                <td style="--start: ${tabla.market_data.sparkline_7d.price[5]}; --size: ${tabla.market_data.sparkline_7d.price[6]}"> <span class="data"> 6 </span> </td>
              </tr>
              <tr>
                <td style="--start: ${tabla.market_data.sparkline_7d.price[6]}; --size: ${tabla.market_data.sparkline_7d.price[7]}"> <span class="data"> 7 </span> </td>
              </tr>
            </tbody>
          
          </table>`
          document.getElementById("tablamarket1").innerHTML = grafico
        }
        )
        .catch(error => {
            console.log(JSON.stringify(error.message))
        })

}
);

const selectElement2 = document.querySelector('#drop2');
selectElement2.addEventListener('change', (event) => {
    chosen2 = event.target.value
    console.log(chosen2)
    let url2 = "https://api.coingecko.com/api/v3/coins/" + chosen2 + "?community_data=true&sparkline=true"
    fetch(url2)
        .then(response => response.json())
        .then(obj => {
            let tabla = obj;
            let valor2 = tabla.market_data.market_cap.usd
            document.getElementById("marketcap2").textContent = "$" + valor2
        }
        )
        .catch(error => {
            console.log(JSON.stringify(error.message))
        })
});
const selectElement3 = document.querySelector('#drop3');
selectElement3.addEventListener('change', (event) => {
    chosen3 = event.target.value
    console.log(chosen3)
    let url3 = "https://api.coingecko.com/api/v3/coins/" + chosen3 + "?community_data=true&sparkline=true"
    fetch(url3)
        .then(response => response.json())
        .then(obj => {
            let tabla = obj;
            let valor3 = tabla.market_data.market_cap.usd
            document.getElementById("marketcap3").textContent = "$" + valor3
        }
        )
        .catch(error => {
            console.log(JSON.stringify(error.message))
        })
});