# Api SouthPark - NodeJs + Mongodb 

<img src="https://lh3.googleusercontent.com/yq-2UnK8N82e8Wl6XeerbvQbW-StuETkt4oNROgfTcBu95Zn4AHsPHVrEiqPc0958NDh3rPaOtc697mKBUtMmlhfPE8-Eezjfny7npoB5446rhI396Kny2U744qnSTIoNxnAiFA6o2MROnKrtgsfTUpgQ6WeZqhy29Ijk1J4sVdEfCxp24zcqA1_L7gM6k8NYtcAALEwFgnac5QVKVyV1cxN2yLBo-qspQHs7nH41_J0wVzoqeHkzgF4izXhkXJkMrPbr9fTDaQ0J4LEftuY2pdhwFK9eDazd5mjKU_BAD5U7GeLVZEM5yQXFZ6ILTQdWztyM0pmyq6SqhGtoqi2SlB5VHSvhBlj227tixpQ-A8TMODmYXWVTPYFsNTQyNpvDiAVE9pUY2ShuE2hWxQb6I2c22WrAV8EKvZWxoyzRFFYmh_YkZ29f8ooVNQ7y8kVXpV4ka0rMj_VsEGS2WxwhYwEopMrCvEPhIlCCH0B3xIz0cHzX1tiZCvNrCNDnO0c7KAp2Kqc5ds8KECAWWVfcbzCq00ihxWa3fala0nx15w2C9_SDxLkmbnmWUQCDfsAIo_OZvnRvWkvzgzDLa-sAjQEF34iobzHTXaFWJ0EbdaAsPAc-A4PdXSH3VXeOXuaGim-Xl_B7rogUenNqOy_TkWiZiP0DXveP_Fgwx5tr_3Nh25GZ3plGVF8__s1YL4XF7GZTFdHyAgi0InVH3jkNqbj=w1280-h720-no?authuser=1" alt="SouthPark Logo" style="zoom:33%;" />



<p align="center">
    <img src="https://img.shields.io/github/languages/count/Hyagobsantos/Projeto03-Api-SouthPark-Nodejs?label=Linguagens" />
    <img src="https://img.shields.io/github/languages/top/Hyagobsantos/Projeto03-Api-SouthPark-Nodejs?style=flat-square&logo=javascript">
    <img src="https://img.shields.io/github/stars/Hyagobsantos/Projeto03-Api-SouthPark-Nodejs?label=Estrelas" />
    <img src="https://img.shields.io/snyk/vulnerabilities/github/Hyagobsantos/Projeto03-Api-SouthPark-Nodejs?color=green&label=Vulnerabilidades" />
    <img src="https://img.shields.io/github/license/Hyagobsantos/Projeto03-Api-SouthPark-Nodejs?color=green&style=flat-square" />
</p>

## Sobre essa API

*API Criada com o intuito acadêmico para consolidar conhecimentos adquiridos durante o curso de programação BackEnd - utilizando as Tecnologias NodeJs, MongoDb, Express*


## Como usar Esse Projeto 

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Executando o projeto

*Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.exemple para criar o seu*. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/db_southpark.

Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```bash
npm start
```

## Começando

Vamos fazer nossa primeira solicitação à API South Park!

Para começar a usar a API, use uma ferramenta que permite fazer uma solicitação de API, como curl, Insomnia ou o navegador. No exemplo abaixo, estamos tentando obter as informações:

**Solicitação de exemplo:**

```
https://apisouthpark.herokuapp.com/
```

**Resposta de exemplo:**

```json
{
    info: "Bem Vindo a API SouthPark Brasil"
}
```

É isso! Você fez uma chamada Padrão da API 

## Autenticação

Para Acessar os EndPoints Post e Delete e Necessário um Chave de Autenticação Passada por pela query na Url, Consulte o Administrador para Obter a Chave de Acesso

## Procurando

Todas as pesquisas farão correspondências parciais com o (s) campo (s) em que a pesquisa está habilitada. A documentação do recurso individual mostra quais campos podem ser pesquisados por nome ou religião.

**Solicitação de exemplo:**
```
https://apisouthpark.herokuapp.com/morador?nome=Cartman
```
**Solicitação de exemplo:**
```
https://apisouthpark.herokuapp.com/morador?religiao=católico
```

## Moradores De SouthPark

Representa um personagem do Universo South Park.

Endpoints:

* `/moradores `- obtenha todos os recursos do personagem
* `/morador/{id}` - obter um recurso de personagem específico

**Solicitação de exemplo:**

```
https://apisouthpark.herokuapp.com/morador/613f285fb7b1bc45b5527e2b
```
**Resposta de exemplo:**

```json
{
    _id: "613f285fb7b1bc45b5527e2b",
    nome: "Stan Marsh",
    idade: 10,
    genero: "Masculino",
    ocupacao: "Estudante",
    cor_cabelo: "Preto",
    religiao: "católico",
    imgUrl: "https://static.wikia.nocookie.net/southpark/images/c/c6/Stan-marsh-0.png/revision/latest/scale-to-width-down/319?cb=20210107202918"
}
```
Atributos:

* id - O id deste personagem
* nome - O nome pelo qual esse personagem é conhecido
* idade - A idade desse personagem em anos
* genero - O Genero do personagem 
* ocupacao -  A ocupação deste personagem
* cor_cabelo - A cor do cabelo deste personagem
* religiao - A religião principal deste personagem (mudanças temporárias de religião não rastreadas)
* imgUrl - Imagem do Personagem


## Episódios

Um episódio da série South Park.

`Endpoints:`

* `/episodios` -  obtenha todos os recursos do episódio

* `/episodios/:id` -  obtenha um ep especifico


**Solicitação de exemplo:**

```
https://apisouthpark.herokuapp.com/episodios
```
**Resposta de exemplo:**

```json
[
    {
        _id: "613dcd83d451d4370d064391",
        nome: "Cartman ganha uma sonda anal",
        temporada: 1,
        episodeo: "1",
        lancamento: "13/08/1997"
    },
    {
        _id: "613e4ea06eccb61dd0d2846e",
        nome: "Vulcão",
        temporada: "1",
        episodeo: "2",
        lancamento: "20/08/1997"
}
]
```




Desenvolvido Por - [Hyago Bezerra](https://github.com/Hyagobsantos) 

api southPark -  [MIT licensed](LICENSE).

<p style="text-align:center">
    Muito Obrigado!
</p>