const app = require("./server")

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`Servidor Rodando Na Porta ${port} em http://localhost:${port}`)
})
