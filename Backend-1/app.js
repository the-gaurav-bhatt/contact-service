const express = require("express");
const app = express();
const onSubmitControl = require("./onSubmit");
//making req.body available:
const cors = require("cors");

const allowedOrigins = [
    "http://localhost:3000",
];
app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/api/contact", onSubmitControl);


app.get("/api/log", (req,res)=>{
    console.log("Hello world")
    res.end("ok xata");
});

module.exports = app;
