const express = require("express");
const roteador = require("./src/route");
require("express-async-errors");


const app = express();
app.use(express.json());
app.use(roteador);
require('dotenv').config();


module.exports = app;