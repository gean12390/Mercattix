const express = require ('express')

const rotas = express.Router ()

const fs = require('fs')
const path = require('path')




//rota Get para landing page
rotas.get ('/', (req, res) => {
     try {
            const html = fs.readFileSync(path.join(__dirname, './public/html/index.html'), 'utf8');
            res.send(html);
        } catch (error) {
            console.error('Erro ao carregar o index.html:', error);
            res.status(500).send('Erro interno no servidor.');
        }
})

rotas.post ('/contato', (req, res) => {

    console.log(req.body)

        const nome = req.body.name;
        const email = req.body.email;
        const mensagem = req.body.message;

        console.log(`Contato recebido de ${nome} (${email}): ${mensagem}`);
        res.send('Contato recebido com sucesso!');



})

module.exports = rotas