const express = require("express");
const app = express();
const onSubmitControl = require("./onSubmit");
//making req.body available:
const bodyParser = require("body-parser");
const cors = require("cors");

const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(bodyParser.json());

app.post("/api/contact", onSubmitControl);

module.exports = app;
