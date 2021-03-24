import { widget2 } from './elements.js';
import { postData } from './Helpers.js'

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
        {x: 'MTHB', value: data.power_usage.motherboard}
    ]);

    chart.background().fill("#0a0a0a")

    chart.container("widget2");

    chart.draw();
};
