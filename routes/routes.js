const express = require ('express')
const app = express();
const fs = require('fs');
const path = require('path');
const nodemailer = require("nodemailer");
const { log } = require('console');
const registrados = []
// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "gabrieldiastrin63@gmail.com",
    pass: "usen dkyn hfou ehvo",
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

app.get('/register', (req, res) => {
  try {
    const registerHtmlContent = fs.readFileSync(path.join(__dirname, "../public/html/register.html"), "utf-8");
    res.send(registerHtmlContent)
  } catch (error) {
    console.log(error);
  }
});

app.get('/login', (req, res) => {
  try {
    const loginHtmlContent = fs.readFileSync(path.join(__dirname, "../public/html/login.html"), "utf-8");
    res.send(loginHtmlContent)
  } catch (error) {
    console.log(error);
  }
});

app.post("/contato", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  transporter.sendMail({
    from: 'gabrieldiastrin63@gmail.com',
    to: 'gabrieldiastrin63@gmail.com',
    subject: 'Nova mensagem de contato - Mercattix',
    text: `
  Olá ${req.body.name},

  Você recebeu uma nova mensagem através do formulário de contato da landing page da Mercattix.

  📩 Detalhes da mensagem:

  👤 Nome: ${req.body.name}
  📧 E-mail: ${req.body.email}
  📝 Mensagem: 
  ${req.body.message}

  Verifique e entre em contato com o interessado o quanto antes.

  —
  Mercattix - Gestão inteligente para lojas online.
  `,
  });

  return res.status(200).json({ success: true });
});

app.post ('/api/auth/register', async (req, res) => {

  console.log(req.body)

  
   const { name, email, password, confirmPassword, storeName, cnpj, phone, role } = req.body;
   const user = {
       name,
       email,
       password,
       confirmPassword,
       storeName,
       cnpj,
       phone,
       role
   };
    
   registrados.push(user)
    res.send('Cadastro realizado com sucesso!');

    console.log(registrados)
})

module.exports = app;