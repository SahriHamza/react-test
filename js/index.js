const ctx = document.getElementById("myChart");
var cumulutaedInstalls = [0];
var installTimes = [0] ;
//extracting and parsing data from metrics  ///////////
for (i=0; i<metrics.length; i++){
    var index = parseInt(metrics[i]["installtime"]);
    installTimes.push(index);
    cumulutaedInstalls.push(i+1);
}
///////////////////////////////////////////////////////
var data = {
    labels: installTimes,
    datasets: [
        {
            label: "Cumulated installs",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: cumulutaedInstalls,
            spanGaps: false,
        }
    ]
};
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
});