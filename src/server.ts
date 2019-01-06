import Web from "./routes/web";
import express = require("express");
import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import passport = require("passport");
import session = require('express-session');

const app = express();

const cookiesecret = "xcvlä#--21##vxcv#äö,551m11$=\"!$0951lö51"

{
  app.use(express.static('../client/public'));
  app.use(cookieParser(cookiesecret));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ }));
  app.use(session({ secret: cookiesecret }));
  app.use(passport.initialize());
  app.use(passport.session());
}

app.use(Web);

app.listen(12347, () => {
  console.log("Server is listening at port 12347!");
});
