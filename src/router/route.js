const router = require('express').Router();
const { Router } = require('express');
const {principal,listarTodosMoradores,listarMoradorPorId,listarTodosEpisodios,criarMorador,AtualizarMorador,deletarMotador, filtarMoradores} = require("../controller/controller");


router.get("/principal", principal);

router.get("/moradores", listarTodosMoradores);
router.get("/morador/:id", listarMoradorPorId);
router.post("/morador", criarMorador);
router.put("/morador/:id",AtualizarMorador)
router.delete("/morador/:id", deletarMotador)

router.get("/morador", filtarMoradores )

router.get("/episodios", listarTodosEpisodios)


module.exports = router;