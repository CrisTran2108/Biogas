am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("pressurechart", am4charts.XYChart);
  
  //
  let angrychartdata = [];
  socket.on('presschart', (data) => {
    
    angrychartdata.push(data);
    chart.data = angrychartdata;
    //console.log(chart.data);
  });
  // Increase contrast by taking evey second color
  chart.colors.step = 2;
  
  // Add data
  
  // Create axes
  chart.dateFormatter.inputDateFormat = "HH:mm";
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 100;
  
  // Create series
  function createAxisAndSeries(field, name, opposite, bullet) {
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    if(chart.yAxes.indexOf(valueAxis) != 0){
      valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
    }
    
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.yAxis = valueAxis;
    series.name = name;
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.tensionX = 0.8;
    series.showOnInit = true;
    
    var interfaceColors = new am4core.InterfaceColorSet();
    
    switch(bullet) {
      case "triangle":
        var bullet = series.bullets.push(new am4charts.Bullet());
        bullet.width = 5;
        bullet.height = 5;
        bullet.horizontalCenter = "middle";
        bullet.verticalCenter = "middle";
        
        var triangle = bullet.createChild(am4core.Triangle);
        triangle.stroke = interfaceColors.getFor("background");
        triangle.strokeWidth = 2;
        triangle.direction = "top";
        triangle.width = 5;
        triangle.height = 5;
        break;
      case "rectangle":
        var bullet = series.bullets.push(new am4charts.Bullet());
        bullet.width = 5;
        bullet.height = 5;
        bullet.horizontalCenter = "middle";
        bullet.verticalCenter = "middle";
        
        var rectangle = bullet.createChild(am4core.Rectangle);
        rectangle.stroke = interfaceColors.getFor("background");
        rectangle.strokeWidth = 2;
        rectangle.width = 5;
        rectangle.height = 5;
        break;
      default:
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.stroke = interfaceColors.getFor("background");
        bullet.circle.strokeWidth = 2;
        break;
    }
    
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.line.stroke = series.stroke;
    valueAxis.renderer.labels.template.fill = series.stroke;
    valueAxis.renderer.opposite = opposite;
  }
  
  
  createAxisAndSeries("P_tank", "P_tank", false, "triangle");
  createAxisAndSeries("P_oil", "P_oil", true, "rectangle");
  
  // Add legend
  chart.legend = new am4charts.Legend();
  
  // Add cursor
  chart.cursor = new am4charts.XYCursor();
  
  // generate some random data, quite different range
  function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 100);
    firstDate.setHours(0, 0, 0, 0);
  
    var P_oil = 2900;
    var P_tank = 8700;
  
    for (var i = 0; i < 15; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      var newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);
  
      P_oil += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
      P_tank += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
  
      chartData.push({
        date: newDate,
        P_oil: P_oil,
        P_tank: P_tank
      });
    }
    return chartData;
  }
  
  }); // end am4core.ready()