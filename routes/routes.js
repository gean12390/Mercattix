const express = require ('express')
const app = express();
const fs = require('fs');
const path = require('path');

// MIDDLEWARE
app.use(express.json());

//rota Get para landing page
app.get ('/', (req, res) => {
    try {
        const html = fs.readFileSync(path.join(__dirname, './public/html/index.html'), 'utf8');
        res.send(html);
    } catch (error) {
        console.error('Erro ao carregar o index.html:', error);
        res.status(500).send('Erro interno no servidor.');
    }
});

app.post("/contato", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  console.log("Nova mensagem de contato:", { name, email, message });

  return res.status(200).json({ success: true });
});

module.exports = app;