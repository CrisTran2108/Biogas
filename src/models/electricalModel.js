import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ElectricalSchema = new Schema({
    V_ab: {type: Number, default: null},
    I_ab: {type: Number, default: null},
    I_bc: {type: Number, default: null},
    I_ca: {type: Number, default: null},
    Speed: {type: Number, default: null},
    Frequency: {type: Number, default: null},
    Time: {type: Number, default: null},
  });
  ElectricalSchema.statics = {
    createNew(item) {
      return this.create(item);
    },
    querydata(io) {
      return this.find({}, function (err, data) {
        let angrychartdata = [];
        data.forEach((data)=>{
          
          let dateFormat = require('dateformat');
          let datechart = new Date(Number(data._doc.Time))
          let ichartdatadb = {
          "date": dateFormat(datechart, "HH:MM:ss"),
          "I_ab":data._doc.I_ab,
          "I_bc":data._doc.I_bc,
          "I_ca":data._doc.I_ca,
          };
          angrychartdata.push(ichartdatadb);
        });
        io.emit('ichartdb', angrychartdata);
        //console.log(mang);
        //mang.push(data);
        
        
      }).exec();
    },
    queryNewData(){
      
    }
  }
  module.exports = mongoose.model("electrical", ElectricalSchema);