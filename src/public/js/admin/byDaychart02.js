
var areaChartData = {
    labels: ['13-8-2020', '10-8-2020', '9-8-2020', '4-8-2020', '2-8-2020'],
    datasets: [
        {
            label: 'Số lần hoạt động',
            backgroundColor: 'rgba(60,141,188,0.9)',
            borderColor: 'rgba(60,141,188,0.8)',
            pointRadius: false,
            pointColor: '#3b8bba',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: [1, 2, 8, 1, 5, 0]
        }
    ]
}

var barChartCanvas = $('#chart12').get(0).getContext('2d')
var barChartData = jQuery.extend(true, {}, areaChartData)
var temp0 = areaChartData.datasets[0]

barChartData.datasets[0] = temp0

var barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false
}

var barChart = new Chart(barChartCanvas, {
    type: 'bar',
    data: barChartData,
    options: barChartOptions
})

