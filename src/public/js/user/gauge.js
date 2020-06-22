
socket.on('consentrationchart', (data) => {   
  gauge3.setValueAnimated(Number(data.O2), 3);
  gauge4.setValueAnimated(Number(data.H2S), 3);
  gauge5.setValueAnimated(Number(data.CH4), 3);
});
socket.on('temperchart', (data) => {   
  gauge1.setValueAnimated(Number(data.Water), 3);
  gauge2.setValueAnimated(Number(data.Oil), 3);
});
socket.on('ichart', (data) => {   
  gauge7.setValueAnimated(Number(data.I_ab), 3);
  gauge8.setValueAnimated(Number(data.I_bc), 3);
  gauge9.setValueAnimated(Number(data.I_ca), 3);
});
socket.on('uchart', (data) => {   
  gauge6.setValueAnimated(Number(data.V_ab), 3);
});
var gauge1 = Gauge(
  document.getElementById("gaugetw"),
  {
    min: -100,
    max: 100,
    value: 0,
    color: function(value) {
      if(value < 20) {
        return "#5ee432";
      }else if(value < 40) {
        return "#fffa50";
      }else if(value < 60) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    }
  },
);
var gauge2 = Gauge(
  document.getElementById("gaugeto"),
  {
    min: -100,
    max: 100,
    value: 0,
    color: function(value) {
      if(value < 20) {
        return "#5ee432";
      }else if(value < 40) {
        return "#fffa50";
      }else if(value < 60) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    }
  },
);
var gauge3 = Gauge(
  document.getElementById("gaugeo2"),
  {
    min: -100,
    max: 100,
    value: 0,
    color: function(value) {
      if(value < 20) {
        return "#5ee432";
      }else if(value < 40) {
        return "#fffa50";
      }else if(value < 60) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    }
    
  },
);
var gauge4 = Gauge(
  document.getElementById("gaugeh2s"),
  {
    min: -100,
    max: 100,
    value: 0,
    color: function(value) {
      if(value < 20) {
        return "#5ee432";
      }else if(value < 40) {
        return "#fffa50";
      }else if(value < 60) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    }
  },
);
var gauge5 = Gauge(
  document.getElementById("gaugech4"),
  {
    min: -100,
    max: 100,
    value: 0,
    color: function(value) {
      if(value < 20) {
        return "#5ee432";
      }else if(value < 40) {
        return "#fffa50";
      }else if(value < 60) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    }
  },
);
var gauge6 = Gauge(
  document.getElementById("gaugevab"),
  {
    min: -400,
    max: 400,
    value: 0,
    color: function(value) {
      if(value < 100) {
        return "#5ee432";
      }else if(value < 200) {
        return "#fffa50";
      }else if(value < 300) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    } 
  },
);
var gauge7 = Gauge(
  document.getElementById("gaugeia"),
  {
    min: -100,
    max: 100,
    value: 0,
    color: function(value) {
      if(value < 20) {
        return "#5ee432";
      }else if(value < 40) {
        return "#fffa50";
      }else if(value < 60) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    }
  },
);
var gauge8 = Gauge(
  document.getElementById("gaugeib"),
  {
    min: -100,
    max: 100,
    value: 0,
    color: function(value) {
      if(value < 20) {
        return "#5ee432";
      }else if(value < 40) {
        return "#fffa50";
      }else if(value < 60) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    }
  },
);
var gauge9 = Gauge(
  document.getElementById("gaugeic"),
  {
    min: -100,
    max: 100,
    value: 0,
    color: function(value) {
      if(value < 20) {
        return "#5ee432";
      }else if(value < 40) {
        return "#fffa50";
      }else if(value < 60) {
        return "#f7aa38";
      }else {
        return "#ef4655";
      }
    }
  },
);
