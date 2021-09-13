const router = require('express').Router();
const { Router } = require('express');
const {principal,listarTodosMoradores,listarMoradorPorId,listarTodosEpisodios,criarMorador,AtualizarMorador,deletarMotador, filtarMoradores, listarEpisodeoPorId} = require("../controller/controller");
const cors = require("cors");

//Cors
router.use(cors());
router.options("*", cors())

//Principal
router.get("/", principal);

//Moradores
router.get("/moradores", listarTodosMoradores);
router.get("/morador/:id", listarMoradorPorId);
router.post("/morador", criarMorador);
router.put("/morador/:id",AtualizarMorador)
router.delete("/morador/:id", deletarMotador)

//Filtro
router.get("/morador", filtarMoradores )

//Episodeos
router.get("/episodios", listarTodosEpisodios)
router.get("/episodios/:id", listarEpisodeoPorId)

module.exports = router;