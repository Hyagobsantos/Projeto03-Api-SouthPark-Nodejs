const express = require("express");
require("express-async-errors");
const roteador = require("./src/route");
const {tratamentoErros,validacaoEndPoint,validaDelete} = require("./src/middlewares")


const app = express();
app.use(express.json());

//Middlewares Antes
app.use(validaDelete);

//ROTAS
app.use(roteador);

//Middleware POS
app.all("*", validacaoEndPoint);
app.use(tratamentoErros);









module.exports = app;