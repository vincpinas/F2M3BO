import { widget2 } from './elements.js';
import { postData } from './Helpers.js'

const widget2Data = postData(`/duurzaam-huis/api/api.php?request_id=1`, { })

function widget2con(data){
    const widgetContainer = document.createElement("div").className = "widget2Container";

    let chartPoints = [
        {x: 'GPU', value: data.power_usage.gpu},
        {x: 'CPU', value: data.power_usage.cpu},
        {x: 'MTHB', value: data.power_usage.motherboard}
    ];

    chart = anychart.pie(chartPoints);

    chart.container("widget2chart");

    chart.draw();
};

console.log(widget2Data)

widget2con(widget2Data)
