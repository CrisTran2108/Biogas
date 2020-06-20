import electricalModel from "./../../models/electricalModel"
import environmentalModel from "./../../models/environmentalModel"

/**
 * @param io from socket io lib
 */
let getdata = (io,ee) => {
  let clients = {};
  function kafkadata(id,idmay){
    return function(data){   
      data = JSON.parse(data);
      //console.log(data)
      if (idmay==data.rpi) {
        let dateFormat = require('dateformat');
        let datechart = new Date(Number(data.time))
        let ia, ib, ic, vab , s, f ;
        let tw, po, o2, h2s ;
        let tb, te ;
        data.data.forEach(element => {
          
          if(element.id.includes("eleia")){
            ia = element.v
          }else if(element.id.includes("eleib")) {
            ib = element.v
          }else if(element.id.includes("eleic")) {
            ic = element.v
          }else if(element.id.includes("elevab")) {
            vab = element.v
          }else if(element.id.includes("eles")) {
            s = element.v
          }else if(element.id.includes("elef")) {
            f = element.v
          }else if(element.id.includes("envtw")) {
            tw = element.v
          }else if(element.id.includes("envpo")) {
            po = element.v
          }else if(element.id.includes("envo2")) {
            o2 = element.v
          }else if(element.id.includes("envh2s")) {
            h2s = element.v
          }
        });
        let uchartdata = {
          "date": dateFormat(datechart, "HH:MM:ss"),
          "V_ab":vab,
        };
        let ichartdata = {
          "date": dateFormat(datechart, "HH:MM:ss"),
          "I_ab":ia,
          "I_bc":ib,
          "I_ca":ic,
        };
        let temperaturedata = {
          "date": dateFormat(datechart, "HH:MM:ss"),
          "Water":tw,
          "Oil":"",
        };
        let timedata = {
          "timestart": tb,
          "timestop": te
        };
        let consentrationdata = {
          "date": dateFormat(datechart, "HH:MM:ss"),
          "O2":o2,
          "H2S":h2s,
          "CH4":0,
        };
        let speeddata = {
          "date": dateFormat(datechart, "HH:MM:ss"),
          "S":s,
        };
        let frequencydata = {
          "date": dateFormat(datechart, "HH:MM:ss"),
          "F":f,
        };
        if(data.type=='electrical'){
          io.to(id).emit('ichart', ichartdata);
          io.to(id).emit('uchart', uchartdata);
          io.to(id).emit('speedchart', speeddata);
          io.to(id).emit('frequencychart', frequencydata);
          let item = {
            V_ab: vab,
            I_ab: ia,
            I_bc: ib,
            I_ca: ic,
            Speed: s,
            Frequency: f,
            Time: data.time,
          }
          //electricalModel.createNew(item);
          //electricalModel.querydata();
        }else if(data.type=='environmental'){
          io.to(id).emit('consentrationchart', consentrationdata);
          io.to(id).emit('temperchart', temperaturedata);
          let item = {
            T_water: tw,
            P_oil: po,
            O2: o2,
            H2S: h2s,
            Time: data.time,
          }
          //environmentalModel.createNew(item);
          //environmentalModel.querydata();
        }else{

        }
      } else {
        //
      }
      //io.to(id).emit('abc',data);
    }
  }
  //let chartdata = {};
  
  io.on("connection", (socket) => {
    console.log("connect web");
    
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