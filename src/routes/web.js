import express from "express";
import {home, auth, admin} from "./../controllers/index";
import {authValid} from "./../validation/index";
import passport from "passport";
import initPassportLocal from "./../controllers/passportController/local";


// init passport local
initPassportLocal();

let router = express.Router();

/**
 * init all routes
 * @param app from exactly express modul
 */
let initRoutes = (app) => {
  router.get("/", auth.checkLoggedIn, home.getHome);
  router.get("/login-register", auth.checkLoggedOut, auth.getLoginRegister);
  router.post("/register", auth.checkLoggedOut, authValid.register, auth.postRegister);
  router.get("/verify/:token", auth.checkLoggedOut, auth.verifyAccount);
  router.get("/admin", admin.getAdmin)

  router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login-register",
    successFlash: true,
    failureFlash: true,
  }));

  router.get("/logout", auth.checkLoggedIn, auth.getLogout);

  return app.use("/", router);
};

module.exports = initRoutes;