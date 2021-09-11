const { MongoClient, ObjectId} = require('mongodb');
require('dotenv').config();

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CHAR}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const cliente = new MongoClient(connectionString, {useUnifiedTopology: true, useNewUrlParser: true });

cliente.connect(() => {
    console.log("Conectado Com Sucesso")
});

const db = cliente.db("db_animes");
const anime = db.collection('animes');

module.exports = {anime,ObjectId};

