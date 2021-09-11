const {anime,ObjectId} = require("./database");

const valid = (id) => {
    if(!ObjectId.isValid(id)){
     return "Id inválido";
    }
}

const buscarAnime = (id) => anime.findOne({ _id: ObjectId(id)})

function verificaDuplicata (doc) { //falta testar
    if(anime.find(x => x.nome === doc.nome)){
        return "Nome já Cadastrado"
    }

    if(anime.find(x => x.img === doc.img)){
        return "Imagem Já Cadastrada"
    }
}

function verificaCampos (doc) { //paramentro req.body
    if(typeof doc.Episodes != "number"){
        return "Campo Episodes Precisa Ser um Inteiro"
    }
}

module.exports = {valid,buscarAnime}