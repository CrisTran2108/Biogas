import mongoose from "mongoose";

let Schema = mongoose.Schema;

let EnvironmentalSchema = new Schema({
    T_water: {type: Number, default: null},
    P_oil: {type: Number, default: null},
    O2: {type: Number, default: null},
    H2S: {type: Number, default: null},
    Time: {type: Number, default: null},

  });
  EnvironmentalSchema.statics = {
    createNew(item) {
        return this.create(item);
    },
    querydata() {
      return this.find({}, function (err, data) {
      //console.log(data._doc)
      }).exec();
    }
  }
  module.exports = mongoose.model("environmental", EnvironmentalSchema);