// Variáveis
const express = require ('express');
const app = express ();
const PORT = 3000;
const path = require('path');
const fs = require('fs')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    try {
        const html = fs.readFileSync(path.join(__dirname, './public/html/index.html'), 'utf8');
        res.send(html);
    } catch (error) {
        console.error('Erro ao carregar o index.html:', error);
        res.status(500).send('Erro interno no servidor.');
    }
});

// Iniciando servidor
app.listen (PORT, () => {
    console.log (`Servidor rodando na porta ${PORT}, acesse aqui http://localhost:${PORT}`);
});