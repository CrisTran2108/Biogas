am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
  
    var chart = am4core.create("speedchart", am4charts.XYChart);
    
    let angrychartdata = [];
    socket.on('speedchart', (data) => {
      if(angrychartdata.length > 20){
        angrychartdata.shift()
        angrychartdata.push(data);
      }else{
        angrychartdata.push(data);
      }    
      chart.data = angrychartdata;
      //console.log(chart.data);
    });
    
    chart.dateFormatter.inputDateFormat = "HH:mm:ss";
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 100;
    dateAxis.baseInterval = {
      timeUnit: "second",
      count: 1
    }
    
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
    
    
    createAxisAndSeries("S", "S", false, "triangle");
    // Add legend
    chart.legend = new am4charts.Legend();
    
    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    }); // end am4core.ready()