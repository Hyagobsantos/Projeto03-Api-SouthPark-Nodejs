const {caracter,episodeos,ObjectId} = require("../database/database");

//função comentado para uma possivel melhoria do projeto a ideia e pra quando cadastrar um episodeo puxar as info dos personagem no episodeo na coletion caracter

// async function eplistaCri(doc){
//     const teste = doc.episodeo.split(",");
//     // const listEp2 = [];
//     // if(teste.length === 1){
//     //     const episodeo = JSON.parse(`{"episodeo":"${doc.episodeo}"}`) //recebe um array
//     //     const listEp = await episodeos.find(episodeo).toArray();
//     //     return listEp;
//     // }else{

//     //     for(let i of teste){
//     //         const episodeo = JSON.parse(`{"episodeo":"${i}"}`) //recebe um array
//     //         const listEp = await episodeos.find(episodeo).toArray();
//     //         return listEp;
//     //     }
        
//     // }
//     const listEp = [];
//     for(let i; i < teste.length; i++){
//         const episodeo = JSON.parse(`{"episodeo":"${i}"}`) //recebe um array
//         listEp.push(episodeos.find(episodeo).toArray());
//         return  listEp;
//     }
// }

const buscarMorador = (id) => caracter.findOne({ _id: ObjectId(id)})

async function verificaDuplicata(doc) {
    const objNome = JSON.parse(`{"nome":"${doc.nome}"}`)
    const objImagem = JSON.parse(`{"imgUrl":"${doc.imgUrl}"}`)
    const listarNomes = await caracter.find(objNome).toArray();
    const listarImagens = await caracter.find(objImagem).toArray();
     
    if(listarNomes != 0){
        if(listarNomes.find(x => x.nome === doc.nome)){
            return "Nome já Cadastrado"
        }
    }

    if(listarImagens != 0){
        if(listarImagens.find(x => x.imgUrl === doc.imgUrl)){
            return "Imagem Já Cadastrada"
        }
    }
}

function verificaCamposMoradores (doc) { 

    //verificando os tipos
    if(typeof doc.nome != "string"){
        return "Campo Nome Precisa Ser Informado e ser um texto"
    }

    if(typeof doc.idade != "number"){
        doc.idade = parseInt(doc.idade);
    }

    if(typeof doc.genero != "string"){
        return "Campo genero Precisa Ser Informado e ser um texto"
    }

    if(typeof doc.ocupacao != "string"){
        return "Campo ocupacao Precisa Ser Informado e ser um texto"
    }
    
    if(typeof doc.cor_cabelo != "string"){
        return "Campo Cor do Cabelo Precisa Ser Informado e ser um texto"
    }

    if(typeof doc.religiao != "string"){
        return "Campo religiao Precisa Ser Informado e ser um texto"
    }

    if(typeof doc.imgUrl != "string"){
        return "Campo imgUrl Precisa Ser Informado e ser um texto"
    }
}

const verificaCriacao = (doc) => {
    
    if(doc.nome === undefined){
        return "Informe o Campo Nome"
    }else{
        if(!doc.nome.includes(" ")){
            return "Campo Nome Precisa Conter Sobrenome"
        }
    }

    if(doc.imgUrl === undefined){
        return "Informe o Campo ImagemUrl"
    }else{
        if(!doc.imgUrl.includes(".png" || ".jpeg" || ".gif" || ".png" || ".svg" || "http" || "https" )){
            return "Campo Imagem Precisa Conter um Arquivo Valido"
        }
    }

    if(doc.nome === undefined){
        return "Informe o Campo Nome"
    }else{
        if(doc.nome === "" || doc.nome.trim().length === 0){
            return "Campo Nome Precisa Ser Informado "
        }
    }
        
    if(doc.genero === undefined){
        return "Informe o Campo genero"
    }else{
        if(doc.genero === "" || doc.genero.trim().length === 0){
            return "Campo genero Precisa Ser Informado "
        }
    }

    if(doc.ocupacao === undefined){
        return "Informe o Campo ocupacao"
    }else{
        if(doc.ocupacao === "" || doc.ocupacao.trim().length === 0){
            return "Campo ocupacao Precisa Ser Informado "
        }
    }

    if(doc.cor_cabelo === undefined){
        return "Informe o Campo ocupacao"
    }else{
        if(doc.cor_cabelo === "" || doc.cor_cabelo.trim().length === 0){
            return "Campo cor cabelo Precisa Ser Informado "
        }
    }

    if(doc.religiao === undefined){
        return "Informe o Campo ocupacao"
    }else{
        if(doc.religiao === "" || doc.religiao.trim().length === 0){
            return "Campo religiao Precisa Ser Informado "
        }
    }

    if(doc.imgUrl === undefined){
        return "Informe o Campo ocupacao"
    }else{
        if(doc.imgUrl === "" || doc.imgUrl.trim().length === 0){
            return "Campo imgUrl Precisa Ser Informado "
        }
    }

}

const validarCamponNi = (doc) => {
    
    if(doc.idade === undefined){
        doc.idade = null;
    }

    if(doc.nome === undefined){
       
    }else{
        if(!doc.nome.includes(" ")){
            return "Campo Nome Precisa Conter Sobrenome"
        }
    }

    if(doc.imgUrl === undefined){
        
    }else{
        if(!doc.imgUrl.includes(".png" || ".jpeg" || ".gif" || ".png" || ".svg" || "http" || "https" )){
            return "Campo Imagem Precisa Conter um Arquivo Valido"
        }
    }
}


module.exports = {buscarMorador, verificaDuplicata,verificaCamposMoradores,verificaCriacao,validarCamponNi}