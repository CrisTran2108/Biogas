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
    querydata() {
      return this.find({}, function (err, data) {
        //console.log(data._doc)
      }).exec();
    }
  }
  module.exports = mongoose.model("electrical", ElectricalSchema);