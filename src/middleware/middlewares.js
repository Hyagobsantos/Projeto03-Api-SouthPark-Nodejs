require("express-async-errors");
require('dotenv').config();

const senha = process.env.DB_SENHA;

const validacaoEndPoint = (req,res) => {
    res.status(404).json({message:"Endpoint Não Foi Encontrado"})
}

const tratamentoErros = (error, req,res, next) => {
    res.status(error.status || 500).json({
        error: {
            status: error.status || 500,
            message: error.message || "Erro Interno Do Servidor"
        },
    })
    next();
};
const validaDelete = (req,res,next) => {
    if(req.method === "DELETE" || req.method === "POST" || req.method === "PUT"){
        if(req.query.senha === undefined){
            res.status(400).json({erro: "Senha Não Informada"})
        }else if(req.query.senha != senha){
            res.status(400).json({erro: "Senha Inválida"})
        }else{
            next();
        }
    }else{
        next();
    }
   
}

module.exports = {validacaoEndPoint,tratamentoErros,validaDelete}

