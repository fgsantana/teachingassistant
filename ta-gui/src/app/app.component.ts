
import { Component } from '@angular/core';
import { Aluno } from "./aluno";
import { AlunoService } from './aluno.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private alunoService: AlunoService){}
  aluno: Aluno = { nome: "Felipe", cpf: "12345", email: "f@cin.ufpe.br", github: "fgsantana" };
  alunos: Aluno[] = [];
  cpfduplicado: boolean = false;

  gravar(a: Aluno): void {
    if (this.alunoService.gravar(a)) {
      this.alunos.push(a);
      this.aluno = {nome: "", cpf: "", email: "",github: " " };
    } else {
      this.cpfduplicado = true;
    }
 }
 onMove(): void {
  this.cpfduplicado = false;
}
}


