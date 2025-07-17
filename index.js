// Variáveis
const express = require ('express');
const app = express ();
const PORT = 3000;
const rotas = require('./routes.js');
const path = require('path');

app.use(rotas)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Iniciando servidor
app.listen (PORT, () => {
    console.log (`Servidor rodando na porta ${PORT}, acesse aqui http://localhost:${PORT}`);
}); 
