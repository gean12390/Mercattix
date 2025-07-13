// Variáveis
const express = require ('express');
const app = express ();
const PORT = 3000;

// Iniciando servidor
app.listen (PORT, () => {
    console.log (`Servidor rodando na porta ${PORT}, acesse aqui http://localhost:${PORT}`);
});