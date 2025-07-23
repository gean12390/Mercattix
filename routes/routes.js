const express = require ('express')
const app = express();
const fs = require('fs');
const path = require('path');
const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "juan16fotran@gmail.com",
    pass: "cmqkladfieprsesn",
  },
});

// MIDDLEWARE
app.use(express.json());

//rota Get para landing page
app.get ('/', (req, res) => {
    try {
        const html = fs.readFileSync(path.join(__dirname, '../public/html/index.html'), 'utf8');
        res.send(html);
    } catch (error) {
        console.error('Erro ao carregar o index.html:', error);
        res.status(500).send('Erro interno no servidor.');
    }
});

app.post("/contato", async (req, res) => {
  transporter.sendMail({
    from: 'Contato do Site" <juan16fotran@gmail.com>',
    to: 'juan16fotran@gmail.com',
    subject: 'Nova mensagem de contato',
    text: `Nome: ${req.body.name}\nEmail: ${req.body.email}\nMensagem: ${req.body.message}`,
  })


  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  console.log("Nova mensagem de contato:", { name, email, message });

  return res.status(200).json({ success: true });
});

module.exports = app;