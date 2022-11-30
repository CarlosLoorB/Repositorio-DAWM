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
      document.getElementById("marketcap1").textContent = "Market Cap :$ " + valor
      let tablaMarket = tabla.market_data.sparkline_7d.price
      let max = Math.trunc(Math.max(...tablaMarket))
      let tamano = String(Math.trunc(Math.max(...tablaMarket))).length;
      console.log(tamano + "tamano del maximo")
      let tamanofinal = tamano + 1;
      let tablavisual = tablaMarket.map((precio) => {
        if (max >= 2) {
          return (precio / Math.pow(10, tamanofinal));
        }
        else {
          return precio;
        }
      })
      console.log(tablaMarket)
      console.log(tablavisual)
      let grafico =
        `<table class="charts-css line show-data-axes" id="my-chart">

            <tbody>
            <tr>
            <td style="--start: ${tablavisual[0]}; --size: ${tablavisual[1]}"> <span class="data"> 1 </span> </td>
          </tr>
          <tr>  
            <td style="--start: ${tablavisual[1]}; --size: ${tablavisual[2]}"> <span class="data"> 2 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[2]}; --size: ${tablavisual[3]}"> <span class="data"> 3 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[3]}; --size: ${tablavisual[4]}"> <span class="data"> 4 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[4]}; --size: ${tablavisual[5]}"> <span class="data"> 5 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[5]}; --size: ${tablavisual[6]}"> <span class="data"> 6 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[6]}; --size: ${tablavisual[7]}"> <span class="data"> 7 </span> </td>
          </tr> 
            </tbody>
          
          </table>
          
          <span> 1 = $ ${tablaMarket[1]}</span><br>
          <span> 2 = $ ${tablaMarket[2]}</span><br>
          <span> 3 = $ ${tablaMarket[3]}</span><br>
          <span> 4 = $ ${tablaMarket[4]}</span><br>
          <span> 5 = $ ${tablaMarket[5]}</span><br>
          <span> 6 = $ ${tablaMarket[6]}</span><br>
          <span> 7 = $ ${tablaMarket[7]}</span><br>
          `
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(function () { drawChart(tabla.community_score,"donutchart1") });
      let div = '<div id="donutchart1" style="width: auto; height: 200px;"></div>';

      document.getElementById("tablamarket1").innerHTML = ""
      document.getElementById("tablamarket1").innerHTML = grafico
      document.getElementById("pie1").innerHTML = div

      for (let i = 0; i < 7; i++) {
        let elementoAct1 = tablavisual[i];
        console.log(elementoAct1)

      }
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
      document.getElementById("marketcap2").textContent = "Market Cap :$ " + valor2
      let tablaMarket = tabla.market_data.sparkline_7d.price
      let max = Math.trunc(Math.max(...tablaMarket))
      let tamano = String(Math.trunc(Math.max(...tablaMarket))).length;
      console.log(tamano + "tamano del maximo")
      let tamanofinal = tamano + 1;
      let tablavisual = tablaMarket.map((precio) => {
        if (max >= 2) {
          return (precio / Math.pow(10, tamanofinal));
        }
        else {
          return precio;
        }
      })
      console.log(tablaMarket)
      console.log(tablavisual)
      let grafico =
        `<table class="charts-css line show-data-axes" id="my-chart">

            <tbody>
            <tr>
            <td style="--start: ${tablavisual[0]}; --size: ${tablavisual[1]}"> <span class="data"> 1 </span> </td>
          </tr>
          <tr>  
            <td style="--start: ${tablavisual[1]}; --size: ${tablavisual[2]}"> <span class="data"> 2 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[2]}; --size: ${tablavisual[3]}"> <span class="data"> 3 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[3]}; --size: ${tablavisual[4]}"> <span class="data"> 4 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[4]}; --size: ${tablavisual[5]}"> <span class="data"> 5 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[5]}; --size: ${tablavisual[6]}"> <span class="data"> 6 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[6]}; --size: ${tablavisual[7]}"> <span class="data"> 7 </span> </td>
          </tr> 
            </tbody>
          
          </table>
          <span> 1 = $ ${tablaMarket[1]}</span><br>
          <span> 2 = $ ${tablaMarket[2]}</span><br>
          <span> 3 = $ ${tablaMarket[3]}</span><br>
          <span> 4 = $ ${tablaMarket[4]}</span><br>
          <span> 5 = $ ${tablaMarket[5]}</span><br>
          <span> 6 = $ ${tablaMarket[6]}</span><br>
          <span> 7 = $ ${tablaMarket[7]}</span><br>
          `
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(function () { drawChart(tabla.community_score,"donutchart2") });
      let div = '<div id="donutchart2" style="width: auto; height: 200px;"></div>';

      document.getElementById("tablamarket2").innerHTML = ""
      document.getElementById("tablamarket2").innerHTML = grafico
      document.getElementById("pie2").innerHTML = div

      for (let i = 0; i < 7; i++) {
        let elementoAct1 = tablavisual[i];
        console.log(elementoAct1)

      }
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
      document.getElementById("marketcap3").textContent = "Market Cap :$ " + valor3
      let tablaMarket = tabla.market_data.sparkline_7d.price
      let max = Math.trunc(Math.max(...tablaMarket))
      let tamano = String(Math.trunc(Math.max(...tablaMarket))).length;
      console.log(tamano + "tamano del maximo")
      let tamanofinal = tamano + 1;
      let tablavisual = tablaMarket.map((precio) => {
        if (max >= 2) {
          return (precio / Math.pow(10, tamanofinal));
        }
        else {
          return precio;
        }
      })
      console.log(tablaMarket)
      console.log(tablavisual)
      let grafico =
        `<table class="charts-css line show-data-axes" id="my-chart">

            <tbody>
            <tr>
            <td style="--start: ${tablavisual[0]}; --size: ${tablavisual[1]}"> <span class="data"> 1 </span> </td>
          </tr>
          <tr>  
            <td style="--start: ${tablavisual[1]}; --size: ${tablavisual[2]}"> <span class="data"> 2 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[2]}; --size: ${tablavisual[3]}"> <span class="data"> 3 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[3]}; --size: ${tablavisual[4]}"> <span class="data"> 4 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[4]}; --size: ${tablavisual[5]}"> <span class="data"> 5 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[5]}; --size: ${tablavisual[6]}"> <span class="data"> 6 </span> </td>
          </tr>
          <tr>
            <td style="--start: ${tablavisual[6]}; --size: ${tablavisual[7]}"> <span class="data"> 7 </span> </td>
          </tr> 
            </tbody>
          
          </table>
          <span> 1 = $ ${tablaMarket[1]}</span><br>
          <span> 2 = $ ${tablaMarket[2]}</span><br>
          <span> 3 = $ ${tablaMarket[3]}</span><br>
          <span> 4 = $ ${tablaMarket[4]}</span><br>
          <span> 5 = $ ${tablaMarket[5]}</span><br>
          <span> 6 = $ ${tablaMarket[6]}</span><br>
          <span> 7 = $ ${tablaMarket[7]}</span><br>
          `
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(function () { drawChart(tabla.community_score,"donutchart3") });
      let div = '<div id="donutchart3" style="width: auto; height: 200px;"></div>';

      document.getElementById("tablamarket3").innerHTML = ""
      document.getElementById("tablamarket3").innerHTML = grafico
      document.getElementById("pie3").innerHTML = div

      for (let i = 0; i < 7; i++) {
        let elementoAct1 = tabla.market_data.sparkline_7d.price[i];
        console.log(elementoAct1)

      }
    }
    )
    .catch(error => {
      console.log(JSON.stringify(error.message))
    })
});


function drawChart(pos1,name) {
  let tablagraph = [
    ['Sentimiento', 'Clasificacion'],
    ['Positivo', pos1],
    ['Negativo', (100 - pos1)]
  ]
  var data = google.visualization.arrayToDataTable(tablagraph);

  var options = {
    title: 'Sentimiento del consumidor',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById(name));
  chart.draw(data, options);
}