const express = require("express");
const cors = require("cors");
const AuthRoute = require("./Routes/auth.routes");
const chatRoute = require("./Routes/chatRoutes");

//  Creating a new express app
const app = express();
//  Using cors to allow requests from all origins
app.use(cors());
//  Using express.json() to parse the body of the request
app.use(express.json());

//  Routes
app.get("/", (req, res) => {
  res.send("This Is Test EndPoint => Requested Success!");
});

app.use("/api/auth", AuthRoute);
app.use("/api/generate", chatRoute);
module.exports = app;
