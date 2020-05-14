import passportSocketIo from "passport.socketio";

let configSocketIo = (io, cookieParser, sessionStore) => {
  io.use(passportSocketIo.authorize({
    cookieParser: cookieParser,
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    success: (data, accept) => {
      if (!data.user.logged_in) {
        return accept("incalid user", false);
      }
      return accept(null, true);
    },
    fall: (data, message, error, accept) => {
      if (error) {
        console.log("failed connection to soketio", message);
        return accept(new Error(message), false);
      }
    }
  }));
};

module.exports = configSocketIo;
