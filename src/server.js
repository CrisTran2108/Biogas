import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import session from "./config/session";
import passport from "passport";
import http from "http";
import socketio from "socket.io";
import events from "events";
import kafkaConnect from "./kafka/kafkaConnect";
import initSockets from "./sockets/index";
import cookieParser from "cookie-parser";
import configSocketIo from "./config/socketio";

//init app
let app = express();
//init server with socket.io and express app
let server = http.createServer(app);
let io = socketio(server);
let ee = new events.EventEmitter();
//connect to mongoDB
ConnectDB();
// config session
session.config(app);
// config view engine
configViewEngine(app);
// enable post data for request
app.use(bodyParser.urlencoded({extended: true}));
//enable flash messages
app.use(connectFlash());
//use cookie parser
app.use(cookieParser());
//config passport js
app.use(passport.initialize());
app.use(passport.session());
//init all routes
initRoutes(app);
//config socket io
configSocketIo(io, cookieParser, session.sessionStore);
//
kafkaConnect(io,ee);
//int all sockets
initSockets(io,ee);

server.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`);
});