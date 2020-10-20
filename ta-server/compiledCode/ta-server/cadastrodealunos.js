"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_1 = require("../common/aluno");
class CadastroDeAlunos {
    constructor() {
        this.alunos = [];
    }
    cadastrar(aluno) {
        var result = null;
        if (this.cpfNaoCadastrado(aluno.cpf) && this.githubNaoCadastrado(aluno.github)) {
            result = new aluno_1.Aluno();
            result.copyFrom(aluno);
            this.alunos.push(result);
        }
        return result;
    }
    cpfNaoCadastrado(cpf) {
        return !this.alunos.find(a => a.cpf == cpf);
    }
    githubNaoCadastrado(github) {
        return !this.alunos.find(a => a.github == github);
    }
    atualizar(aluno) {
        var result = this.alunos.find(a => a.cpf == aluno.cpf);
        if (result)
            result.copyFrom(aluno);
        return result;
    }
    excluir(cpf) {
        if (this.alunos.find(a => a.cpf == cpf) !== null) {
            this.alunos = this.alunos.filter(al => !(al.cpf == cpf));
            return "Excluido com sucesso";
        }
        else {
            return null;
        }
    }
    getAlunos() {
        return this.alunos;
    }
}
exports.CadastroDeAlunos = CadastroDeAlunos;
//# sourceMappingURL=cadastrodealunos.js.map