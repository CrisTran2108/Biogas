//$("#gau1").removeAttr("data-percent");

$(document).ready(function(handler ) {
        socket.on('uchart', (data) => {
            //console.log(data);
            $('#gaugevab').data('used',Number(data.V_ab));
            $(".GaugeMeter").gaugeMeter();
          });
        $('#gaugevab').data('used',0);
        $(".GaugeMeter").gaugeMeter();
        
        socket.on('ichart', (data) => {
              //console.log(data);
            $('#gaugeia').data('used',Number(data.I_ab));
            $('#gaugeib').data('used',Number(data.I_bc));
            $('#gaugeic').data('used',Number(data.I_ca));
            $(".GaugeMeter1").gaugeMeter();
          });
        $('#gaugeia').data('used',0);
        $('#gaugeib').data('used',0);
        $('#gaugeic').data('used',0);
        $(".GaugeMeter1").gaugeMeter();

        socket.on('temperchart', (data) => {
              //console.log(data);
            $('#gaugetw').data('used',Number(data.twater));
            //$('#gaugeto').data('used',Number(data.toil));
            $(".GaugeMeter2").gaugeMeter();
          });
        $('#gaugetw').data('used',0);
        $('#gaugeto').data('used',0);
        $(".GaugeMeter2").gaugeMeter();

        socket.on('consentrationchart', (data) => {
              //console.log(data);
            $('#gaugeo2').data('used',Number(data.C_o2));
            $('#gaugeh2s').data('used',Number(data.C_h2s));
            $(".GaugeMeter3").gaugeMeter();
          });
        $('#gaugech4').data('used',0);  
        $('#gaugeo2').data('used',0);
        $('#gaugeh2s').data('used',0);
        $(".GaugeMeter3").gaugeMeter();
});


