am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("rushhour", am4charts.XYChart);
    chart.padding(40, 40, 40, 40);
    
    chart.numberFormatter.bigNumberPrefixes = [
      { "number": 1e+3, "suffix": "K" },
      { "number": 1e+6, "suffix": "M" },
      { "number": 1e+9, "suffix": "B" }
    ];
    
    var label = chart.plotContainer.createChild(am4core.Label);
    label.x = am4core.percent(97);
    label.y = am4core.percent(95);
    label.horizontalCenter = "right";
    label.verticalCenter = "middle";
    label.dx = -15;
    label.fontSize = 50;
    
 
    var stepDuration = 4000;
    
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "network";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;
    
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.disabled = true;
    valueAxis.min = 0;
    valueAxis.rangeChangeEasing = am4core.ease.linear;
    valueAxis.rangeChangeDuration = stepDuration;
    valueAxis.extraMax = 0.1;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "network";
    series.dataFields.valueX = "MAU";
    series.tooltipText = "{valueX.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.interpolationDuration = stepDuration;
    series.interpolationEasing = am4core.ease.linear;
    
    var labelBullet = series.bullets.push(new am4charts.LabelBullet())
    labelBullet.label.horizontalCenter = "right";
    labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
    labelBullet.label.textAlign = "end";
    labelBullet.label.dx = -10;
    
    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function(fill, target){
      return chart.colors.getIndex(target.dataItem.index);
    });
    
    var year =2020;
    label.text = year.toString();
    
    
    categoryAxis.sortBySeries = series;
    
    var allData = {      
      "2020": [
        {
          "network": "1 H",
          "MAU": 2255250000
        },
        {
          "network": "2 H",
          "MAU": 0
        },
        {
          "network": "3 H",
          "MAU": 0
        },
        {
          "network": "4 H",
          "MAU": 0
        },
        {
          "network": "5 H",
          "MAU": 430000000
        },
        {
          "network": "6 H",
          "MAU": 0
        },
        {
          "network": "7 H",
          "MAU": 1000000000
        },
        {
          "network": "8 H",
          "MAU": 0
        },
        {
          "network": "9 H",
          "MAU": 0
        },
        {
          "network": "10 H",
          "MAU": 246500000
        },
        {
          "network": "11 H",
          "MAU": 355000000
        },
        {
          "network": "12 H",
          "MAU": 0
        },
        {
          "network": "13 H",
          "MAU": 500000000
        },
        {
          "network": "14 H",
          "MAU": 624000000
        },
        {
          "network": "15 H",
          "MAU": 329500000
        },
        {
          "network": "16 H",
          "MAU": 1000000000
        },
        {
          "network": "17 H",
          "MAU": 431000000
        },
        {
          "network": "18 H",
          "MAU": 1433333333
        },
        {
          "network": "19 H",
          "MAU": 1900000000
        },
        {
            "network": "20 H",
            "MAU": 1900000000
          },
          {
            "network": "21 H",
            "MAU": 1900000000
          },
          {
            "network": "22 H",
            "MAU": 1900000000
          },
          {
            "network": "23 H",
            "MAU": 1900000000
          },
          {
            "network": "00 H",
            "MAU": 1900000000
          }
      ]
    }
    
    chart.data = JSON.parse(JSON.stringify(allData[2020]));
    
    }); // end am4core.ready()