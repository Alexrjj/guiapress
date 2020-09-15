const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/connection');
const categoriesController = require('./categories/CategoriesController');
const articleController = require('./articles/ArticlesController');

// Definindo View Engine
app.set('view engine', 'ejs');

// Definindo pasta de arquivos estáticos
app.use(express.static('public'));

// Definindo Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Conexão Banco de Dados
connection
    .authenticate()
    .then(() => {
        console.log('DB Conectado!');
    }).catch((error) => {
        console.log(error);
    });

// Definindo rotas através de Controllers
app.use('/', categoriesController);
app.use('/', articleController);

// Exibindo a página Index padrão
app.get('/', (req, res) => {
    res.render('index');
});

// Definindo porta de inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando!');
});
