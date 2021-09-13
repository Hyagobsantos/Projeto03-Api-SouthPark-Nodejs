const express = require("express");
require("express-async-errors");
const roteador = require("../router/route");
const {tratamentoErros,validacaoEndPoint,validaDelete} = require("../middleware/middlewares")


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