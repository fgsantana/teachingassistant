
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aluno: Aluno = { nome: "Felipe", cpf: "12345", email: "f@cin.ufpe.br", github: "fgsantana" };
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  github: string;
}
