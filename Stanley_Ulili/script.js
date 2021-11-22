let stars = [135850, 52122, 148825, 16939, 9763];
let frameworks = ['React', 'Angular', 'Vue', 'Hyperapp', 'Omi'];

let ctx_bar = document.getElementById('chart_bar')

let chart_bar = new Chart( ctx_bar, {
    type: 'bar',
    data:{
        labels: frameworks,
        datasets: [{
            label: 'Github Stars',
            data: stars,
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: false
    },
});

let ctx_pie = document.getElementById('chart_pie')

let chart_pie = new Chart( ctx_pie, {
    type: 'pie',
    data:{
        labels: frameworks,
        datasets: [{
            label: 'Github Stars',
            data: stars,
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)"
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: false
    },
});

let ctx_line = document.getElementById('chart_line')

let chart_line = new Chart( ctx_line, {
    type: 'line',
    data:{
        labels: frameworks,
        datasets: [{
            label: 'Github Stars',
            data: stars,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            fill: true,
            lineTension: 0.1
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: false
    },
});