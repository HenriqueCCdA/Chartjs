let ctx = document.getElementById('chart').getContext('2d');

let data = [0, 10, 5, 2, 20, 30, 45];
let labels = ["January", "February", "March", "April", "May", "June", "July"];

let chart = new Chart(ctx, {
    type: 'line',
    data:{
        labels: labels,
        datasets: [{
            label: "Dataset",
            backgroundColor: 'rgb(41, 128, 185)',
            borderColor: 'rgb(41, 128, 185)',
            data: data,
        }],
    },

    options: {
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        },
        layout: {
            padding: {
                left: 20,
                right:20,
                top: 20,
                bottom:20
            }
        },
        plugins: {
            title: {
                display: false,
                text: 'Sales by Months',
                fontSize: 20,
            },
            legend:{
                display: true,
                position: 'bottom'
            },
            tooltip:{
                enabled: true,
                intersect: true,
                backgroundColor: 'rgba(41, 128, 185, 0.8)'
            },
        },
        scales: {
            x : {
                grid:{ 
                    display: false
                }
            },
            y : {
                grid:{ 
                    display: false
                }
            }
        }
    }
});

/* const addData = () => {
    let sizeData = chart.data.datasets[0].data.length
    console.log(chart.data.datasets[0].data)
    chart.data.datasets[0].data[sizeData] = Math.random() * 100;
    chart.data.labels[sizeData] = `New Data ${sizeData + 1}`
    chart.update()
} */

function addData(){
    let sizeData = chart.data.datasets[0].data.length
    console.log(chart.data.datasets[0].data)
    chart.data.datasets[0].data[sizeData] = Math.random() * 100;
    chart.data.labels[sizeData] = `New Data ${sizeData + 1}`
    chart.update()
}

const removeData = () => {
    chart.data.datasets[0].data.pop()
    chart.data.labels.pop()
    chart.update()
}