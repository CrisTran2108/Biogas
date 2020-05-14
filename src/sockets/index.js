import getData from "./getdata/getdata";

/**
 * @param io from socket io lib
 */
let initSockets = (io,ee) => {
  getData(io,ee);
};

module.exports = initSockets;
