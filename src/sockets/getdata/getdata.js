
/**
 * @param io from socket io lib
 */
let getdata = (io,ee) => {
  let clients = {};
  function kafkadata(id,idmay){
    return function(data){
      data = JSON.parse(data);
      if (idmay==data.rpi) {
        let dateFormat = require('dateformat');
        let datechart = new Date(Number(data.time))
        let ia, ib, ic, vab , s, f ;
        let tw, po, o2, h2s ;
        let tb, te ;
        data.data.forEach(element => {
          switch (element.type) {
            case "phaseA":
              ia = element.v
              break;
            case "phaseB":
              ib = element.v
              break;
            case "phaseC":
              ic = element.v
              break;
            case "dayAB":
              vab = element.v
              break;
            //case "g01eles":
            //  s = element.v
            //  break;
            //case "g01elef":
            //  f = element.v
            //  break;
            case "temW":
              tw = element.v
              break;
            case "g01envpo":
              po = element.v
              break;
            case "conseno2":
              o2 = element.v
              break;
            case "consenh2s":
              h2s = element.v
              break;
            case "timeB":
              tb = element.v
              break;
            case "timeE":
              te = element.v
              break;
            default:
              console.log("data not definded");
              break;
          };
          
        });
        let uchartdata = {
          "date": dateFormat(datechart, "HH:MM"),
          "V_ab":vab,
        };
        let ichartdata = {
          "date": dateFormat(datechart, "HH:MM"),
          "I_ab":ia,
          "I_bc":ib,
          "I_ca":ic,
        };
        let temperaturedata = {
          "date": dateFormat(datechart, "HH:MM"),
          "twater":tw,
          "toil":"",
        };
        let timedata = {
          "timestart": tb,
          "timestop": te
        };
        let consentrationdata = {
          "date": dateFormat(datechart, "HH:MM"),
          "C_o2":o2,
          "C_h2s":h2s,
          "C_ch4":"",
        };
        io.to(id).emit('consentrationchart', consentrationdata);
        io.to(id).emit('temperchart', temperaturedata);
        io.to(id).emit('ichart', ichartdata);
        io.to(id).emit('uchart', uchartdata);
      } else {
        //
      }
      //io.to(id).emit('abc',data);
    }
  }
  //let chartdata = {};
  
  io.on("connection", (socket) => {
    //console.log("connect web");
    
    let currentUserId = socket.request.user._doc.idmachine;
    let fuctionlistenler = kafkadata(socket.id,currentUserId)
    if (clients[currentUserId]) {
      clients[currentUserId].push(socket.id);
    } else {
      clients[currentUserId] = [socket.id];
    }
    ee.on('aggregator-message', fuctionlistenler);
    
    socket.on("disconnect", () => {
      clients[currentUserId] = clients[currentUserId].filter((socketId) => {
          return socketId !== socket.id;
      });
      ee.removeListener('aggregator-message',  fuctionlistenler);
      if (!clients[currentUserId].length) {
        delete clients[currentUserId];
      }
    });
    //console.log(clients);
    
  });
};

module.exports = getdata
