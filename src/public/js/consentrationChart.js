am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create("consentrationchart", am4charts.XYChart);
  
  let angrychartdata = [];
  socket.on('consentrationchart', (data) => {
    angrychartdata.push(data);
    chart.data = angrychartdata;
    //console.log(chart.data);
  });
  
  
  chart.dateFormatter.inputDateFormat = "HH:mm";
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.minGridDistance = 100;
  dateAxis.startLocation = 0.5;
  dateAxis.endLocation = 0.5;
  dateAxis.baseInterval = {
    timeUnit: "date",
    count: 1
  }
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;
  valueAxis.renderer.disabled = true;
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.dateX = "date";
  series.name = "O2";
  series.dataFields.valueY = "O2";
  series.tooltipText = "[#000]{valueY.value}[/]";
  series.tooltip.background.fill = am4core.color("#FFF");
  series.tooltip.getStrokeFromObject = true;
  series.tooltip.background.strokeWidth = 3;
  series.tooltip.getFillFromObject = false;
  series.fillOpacity = 0.6;
  series.strokeWidth = 1;
  series.stacked = true;
  
  var series2 = chart.series.push(new am4charts.LineSeries());
  series2.name = "H2S";
  series2.dataFields.dateX = "date";
  series2.dataFields.valueY = "H2S";
  series2.tooltipText = "[#000]{valueY.value}[/]";
  series2.tooltip.background.fill = am4core.color("#FFF");
  series2.tooltip.getFillFromObject = false;
  series2.tooltip.getStrokeFromObject = true;
  series2.tooltip.background.strokeWidth = 3;
  series2.sequencedInterpolation = true;
  series2.fillOpacity = 0.6;
  series2.stacked = true;
  series2.strokeWidth = 2;

  var series3 = chart.series.push(new am4charts.LineSeries());
  series3.name = "CH4";
  series3.dataFields.dateX = "date";
  series3.dataFields.valueY = "CH4";
  series3.tooltipText = "[#000]{valueY.value}[/]";
  series3.tooltip.background.fill = am4core.color("#FFF");
  series3.tooltip.getFillFromObject = false;
  series3.tooltip.getStrokeFromObject = true;
  series3.tooltip.background.strokeWidth = 3;
  series3.sequencedInterpolation = true;
  series3.fillOpacity = 0.6;
  series3.stacked = true;
  series3.strokeWidth = 3;
  
  chart.cursor = new am4charts.XYCursor();
  // Add a legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = "top";
  
  }); // end am4core.ready()