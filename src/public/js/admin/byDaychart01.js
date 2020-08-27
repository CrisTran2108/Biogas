
    var areaChartData = {
        labels  : ['13-8-2020', '10-8-2020', '9-8-2020', '4-8-2020', '2-8-2020'],
        datasets: [
          {
            label               : 'Số giờ hoạt động',
            backgroundColor     : 'rgba(60,141,188,0.9)',
            borderColor         : 'rgba(60,141,188,0.8)',
            pointRadius          : false,
            pointColor          : '#3b8bba',
            pointStrokeColor    : 'rgba(60,141,188,1)',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data                : [0.07, 0.51, 0.8, 0.04, 0.84]
          },
          {
            label               : 'Số  giờ hoạt động trung bình',
            backgroundColor     : 'rgba(210, 214, 222, 1)',
            borderColor         : 'rgba(210, 214, 222, 1)',
            pointRadius         : false,
            pointColor          : 'rgba(210, 214, 222, 1)',
            pointStrokeColor    : '#c1c7d1',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data                : [0.07, 0.25, 0.1, 0.04, 0.17]
          },
          {
            label               : 'Số giờ hoạt động tối đa',
            backgroundColor     : 'rgba(255,0,0,0.3)',
            borderColor         : 'rgba(255,0,0,0.3',
            pointRadius         : false,
            pointColor          : 'rgba(255,0,0,0.3)',
            pointStrokeColor    : '#c1c7d1',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data                : [0.07, 0.25, 0.25, 0.04, 0.25]
          },
          {
            label               : 'Số giờ hoạt động tối thiểu',
            backgroundColor     : 'rgba(0,255,0,0.3)',
            borderColor         : 'rgba(0,255,0,0.3)',
            pointRadius         : false,
            pointColor          : 'rgba(0,255,0,0.3)',
            pointStrokeColor    : '#c1c7d1',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data                : [0.07, 0.25, 0.04, 0.04, 0.04]
          },
        ]
      }
  
      var barChartCanvas = $('#chart11').get(0).getContext('2d')
      var barChartData = jQuery.extend(true, {}, areaChartData)
      var temp0 = areaChartData.datasets[0]
      var temp1 = areaChartData.datasets[1]
      var temp2 = areaChartData.datasets[2]
      var temp3 = areaChartData.datasets[3]

      barChartData.datasets[0] = temp0
      barChartData.datasets[1] = temp1
      barChartData.datasets[2] = temp2
      barChartData.datasets[3] = temp3

      var barChartOptions = {
        responsive              : true,
        maintainAspectRatio     : false,
        datasetFill             : false
      }
  
      var barChart = new Chart(barChartCanvas, {
        type: 'bar', 
        data: barChartData,
        options: barChartOptions
      })
  
