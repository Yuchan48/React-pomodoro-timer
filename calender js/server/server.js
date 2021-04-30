require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 4080;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log("connected to MongoDB"))

app.use("/api/calendar", require("./Controllers/CalendarController"));

app.listen(port, () => console.log("server started"));