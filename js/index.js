let widget2Data;
let widget2Response = await fetch(`/duurzaam-huis/api/api.php?request_id=1`);
if (widget2Response.ok) {
    widget2Data = await widget2Response.json();
    widget2con(widget2Data)
}

function widget2con(data){
    let chart = anychart.pie();
    const dataProvider = document.querySelector("#widget2 .tooltip");
    dataProvider.innerHTML = `Data provider: ${data.creator.first} ${data.creator.last}.`

    chart.data([
        {x: 'GPU', value: data.power_usage.gpu},
        {x: 'CPU', value: data.power_usage.cpu},
        {x: 'MOBO', value: data.power_usage.motherboard}
    ]);

    chart.title("Energieverbruik: computer componenten");
    chart.background().fill("#0a0a0a");
    chart.container("widget2");
    chart.draw();
};


const laadJSON = (url) => {
    // het XMLHttpRequest object maken
    const aanvraag = new XMLHttpRequest();

    aanvraag.onreadystatechange = () => {
      if (aanvraag.readyState === 4 && aanvraag.status === 200) {
        let jsonText = aanvraag.responseText;
        let data = JSON.parse(jsonText);
        widget3con(data.energiedata);
        widget4con(data.plasticdata)
      }
    };
  
    // serveraanvraag specificeren
    aanvraag.open("GET", url, true);
  
    // aanvraag versturen
    aanvraag.send();
};

function widget3con(data){
    let chart2 = anychart.line();
    chart2.data(data);
    chart2.title("Maandelijkse energie verbruik computer");
    var xAxis = chart2.xAxis();
    xAxis.title("Maand");
    var yAxis = chart2.yAxis();
    yAxis.title("Gebruik in KwH");
    chart2.background().fill("#0a0a0a");
    chart2.container("widget3");
    chart2.draw();
};

function widget4con(data) {
    new Chartist.Pie(`#widget4`, data, {
        donut: true,
        donutWidth: 50,
        donutSolid: true,
        startAngle: 270,
        total: 304
    })
}

window.addEventListener("DOMContentLoaded", laadJSON("json/data.json"));