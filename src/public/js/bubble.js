am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create map instance
    var chart = am4core.create("bubble", am4maps.MapChart);
    
    var title = chart.titles.create();
    
    
    var mapData = [
      { "id":"VN-HN", "name":"Ha Noi", "value":25, "color": chart.colors.getIndex(0) },
      { "id":"VN-HP", "name":"Hai Phong", "value":10, "color": chart.colors.getIndex(0) },
      { "id":"VN-SG", "name":"Ho Chi Minh", "value":5, "color": chart.colors.getIndex(0) },
      { "id":"VN-DN", "name":"Da Nang", "value":10, "color": chart.colors.getIndex(0) }
    ];
    
    // Set map definition
    chart.geodata = am4geodata_vietnamLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;
    polygonSeries.nonScalingStroke = true;
    polygonSeries.strokeWidth = 0.5;
    polygonSeries.calculateVisualCenter = true;
    
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.data = mapData;
    imageSeries.dataFields.value = "value";
    
    var imageTemplate = imageSeries.mapImages.template;
    imageTemplate.nonScaling = true
    
    var circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";
    
    
    imageSeries.heatRules.push({
      "target": circle,
      "property": "radius",
      "min": 4,
      "max": 30,
      "dataField": "value"
    })
    
    imageTemplate.adapter.add("latitude", function(latitude, target) {
      var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
      if(polygon){
        return polygon.visualLatitude;
       }
       return latitude;
    })
    
    imageTemplate.adapter.add("longitude", function(longitude, target) {
      var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
      if(polygon){
        return polygon.visualLongitude;
       }
       return longitude;
    })
    
    
    
    }); // end am4core.ready()