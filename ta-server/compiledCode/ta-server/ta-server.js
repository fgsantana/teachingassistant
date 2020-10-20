"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cadastrodealunos_1 = require("./cadastrodealunos");
var taserver = express();
var cadastro = new cadastrodealunos_1.CadastroDeAlunos();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
taserver.use(allowCrossDomain);
taserver.use(bodyParser.json());
taserver.get('/alunos', function (req, res) {
    res.send(JSON.stringify(cadastro.getAlunos()));
});
taserver.post('/aluno', function (req, res) {
    var aluno = req.body; //verificar se é mesmo Aluno!
    aluno = cadastro.cadastrar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser cadastrado" });
    }
});
taserver.put('/aluno', function (req, res) {
    var aluno = req.body;
    aluno = cadastro.atualizar(aluno);
    if (aluno) {
        res.send({ "success": "O aluno foi atualizado com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser atualizado" });
    }
});
taserver.delete('/aluno/:cpf', function (req, res) {
    var cpfAExcluir = req.params.cpf;
    var resposta = cadastro.excluir(cpfAExcluir);
    if (resposta !== null) {
        res.send({ "success": "O aluno foi excluido com sucesso" });
    }
    else {
        res.send({ "failure": "O aluno não pode ser excluido" });
    }
});
taserver.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=ta-server.js.map