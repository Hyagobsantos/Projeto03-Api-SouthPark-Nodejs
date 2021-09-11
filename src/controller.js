const {anime,ObjectId} = require("./database");
const {valid,buscarAnime} = require("./functionAux");

const home = async (req,res) => {
    res.json({info: "Bem Vindo a API BlueAnimes"})
}

const listAll = async (req,res) => {
    try{
        const listartodos = await anime.find({}).toArray();
        listartodos.length === 0 ? res.status(404).json({erro:"Nada A listar"}): res.status(200).json(listartodos);
    }catch (err){ 
        res.status(500).json({erro:err})
    }
}

const listById = async (req,res) => {
    const id = req.params.id;

    const validado = valid(id);
    if(validado){
        res.status(400).json({erro:validado})
        return
    }

    try{
        const encontrado = await buscarAnime(id);
        encontrado ? res.status(200).json(encontrado) : res.status(400).json({erro:"Anime Não Encontrado"}) 
    }catch (err){
        res.json({erro:err})
    }
    
}

const criarAnime = async (req,res) => {
    const anime = req.body;




}


module.exports =  {home,listAll,listById,criarAnime}