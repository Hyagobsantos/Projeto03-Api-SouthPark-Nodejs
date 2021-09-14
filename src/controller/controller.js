const {caracter,episodeos,ObjectId} = require("../database/database");
const {buscarMorador, verificaDuplicata,verificaCamposMoradores,verificaCriacao,validarCamponNi,eplistaCri} = require("./functionAux");

//Rota Home
const principal = async (req,res) => {
    res.json({info: "Bem Vindo a API SouthPark Brasil"})
}

//Rota ListarTodosOsMoradores
const listarTodosMoradores = async (req,res) => {
    try{
        const listartodos = await caracter.find({}).toArray();
        listartodos.length === 0 ? res.status(404).json({erro:"Nada A listar"}): res.status(200).json(listartodos);
    }catch (err){ 
        res.status(500).json({erro:err.message })
    }
}

//Rota Listar Moradores Por ID
const listarMoradorPorId = async (req,res) => {
    const id = req.params.id;

    try{
        const encontrado = await buscarMorador(id);
        encontrado ? res.status(200).json(encontrado) : res.status(404).json({erro:"Recurso Não Encontrado"}) 
    }catch (err){
        res.json({erro:err.message})
    }
}

//Rota Para Listar Todos Eposideos
const listarTodosEpisodios = async (req,res) => {
    try{
        const listartodos = await episodeos.find({}).toArray();
        listartodos.length === 0 ? res.status(404).json({erro:"Nada A listar"}): res.status(200).json(listartodos);
    }catch (err){ 
        res.status(500).json({erro:err.message })
    }
}

//Rota Para Listar Episodeos Por ID
const listarEpisodeoPorId = async (req,res) => {
    const id = req.params.id;

    try{
        const encontrado = await buscarMorador(id);
        encontrado ? res.status(200).json(encontrado) : res.status(400).json({erro:"Recurso Não Encontrado"}) 
    }catch (err){
        res.json({erro:err.message})
    }
}

//Função Para Criar um novoMorador
const criarMorador = async (req,res) => {
    const caractere = req.body;
   
    const duplicado = await verificaDuplicata(caractere);
    const campos = verificaCamposMoradores(caractere);
    const criacao = verificaCriacao(caractere)
    
    
    if(duplicado || campos || criacao ){
        res.status(400).json({erro: duplicado ?? campos ?? criacao})
        return

    }

    try{
        const result = await caracter.insertOne(caractere);

        if (result.acknowledged == false) {
            res.status(500).json({ error: "Ocorreu um erro" });
            return;
        }
        
        res.status(201).json(caractere)
    }catch (err){
        res.status(500).json({erro:err});
    }

  
}

const AtualizarMorador = async (req,res) => {
    const id = req.params.id;
    const obj = req.body;
    const encontrado = await buscarMorador(id);
    const valida = validarCamponNi(obj)
    
    if(valida){
        res.status(400).json({erro: valida})
        return
    }

    if(!encontrado){
        res.status(404).json({erro: "Morador Não Encontrado"})
        return
    }

    try{
        const result = await caracter.updateOne(
            {
                _id: ObjectId(id)
            },
            {
                $set: obj
            }
        );
    
        if (result.acknowledged == "undefined") {
            res.status(500).json({ error: "Ocorreu um erro ao atualizar o personagem" });
            return;
        }
     
        res.status(200).json(await buscarMorador(id));
    }catch (err){
        res.status(500).json({erro:err});
    }

   

}

const deletarMotador = async (req,res) => {
    const id = req.params.id;
    const encontrado = await buscarMorador(id);

    if(!encontrado){
        res.status(404).json({erro: "Morador Não Encontrado"})
        return
    }

    try{
        const result = await caracter.deleteOne({
            _id: ObjectId(id),
        });
        
        if (result.deletedCount !== 1) {
            res
                .status(500)
                .send({ error: "Ocorreu um erro ao remover o personagem" });
            return;
        }
    
        res.status(200).json({mensagem:"Personagem Excluido Com Sucesso"});
    }catch (err){
        res.status(500).json({erro:err});
    }
   
};

const filtarMoradores = async (req, res) => {
    let { nome, religiao } = req.query;

    if (nome === undefined) nome = "";
    if(religiao === undefined) religiao = "";

    try {
      const morador = await caracter.find({
        nome: { $regex: `${nome}`, $options: 'i' },
        religiao: { $regex: `${religiao}`, $options: 'i'},
      }).toArray();
  
      if (morador.length === 0)
        return res.status(404).send({ erro: "Personagem não encontrado" });
  
      return res.status(200).json(morador);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  };


module.exports =  {
    principal,
    listarTodosMoradores,listarMoradorPorId,criarMorador,AtualizarMorador,deletarMotador,  //crudPrincipal
    listarTodosEpisodios,listarEpisodeoPorId, //crudSecundario
    filtarMoradores //filtro
} 