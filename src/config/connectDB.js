import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * Connect to mongoDB
 */

let connectDB = () => {
  mongoose.Promise = bluebird;
  // mongodb://localhost:27017/biogas
  let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  return mongoose.connect(URI, {useMongoClient: true});
};

module.exports = connectDB;