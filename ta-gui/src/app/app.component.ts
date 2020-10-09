
import { Component } from '@angular/core';
import { Aluno } from "./aluno";
import { AlunoService } from './aluno.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aluno: Aluno = { nome: "Felipe", cpf: "12345", email: "f@cin.ufpe.br", github: "fgsantana" };
  alunoService = new AlunoService();

  gravar(a: Aluno): void {
    this.alunoService.gravar(a);
    this.aluno = {nome: "", cpf: "", email: "", github: ""};
   console.log(this.alunoService.alunos);
 }
}


