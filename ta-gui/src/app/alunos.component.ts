import { Component, OnInit } from '@angular/core';

import { Aluno } from '../../../common/aluno';
import { AlunoService } from './aluno.service';


@Component({
    selector: 'app-root',
    templateUrl: './alunos.component.html',
    styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
    constructor(private alunoService: AlunoService) { }

    aluno: Aluno = new Aluno();
    alunos: Aluno[] = [];

    cpfduplicado: boolean = false;
    githubduplicado: boolean = false;

    criarAluno(a: Aluno): void {
        if(this.alunos.find(al => al.github==a.github)){
            this.githubduplicado=true;
        }
        else{

        this.alunoService.criar(a)
            .subscribe(
                ar => {
                    if (ar) {
                        this.alunos.push(ar);
                        this.aluno = new Aluno();
                    } else {
                        this.cpfduplicado = true;
                    }
                },
                msg => { alert(msg.message); }
            );
            alert("Já executei o criar e o subscribe!");
    }
}
excluir(a: Aluno): void{
    this.alunoService.excluir(a.cpf).subscribe({
        next: r => {
            console.log("Aluno com cpf ",a.cpf, "excluido")
       this.alunos =  this.alunos.filter(al => !(al.cpf==a.cpf))}
            ,
        error: err => console.log(err)
    })
}

    onMove(): void {
        this.cpfduplicado = false;
        this.githubduplicado = false;
     }

    ngOnInit(): void {
        this.alunoService.getAlunos()
        .subscribe(
            
          as => { this.alunos = as; },
          msg => { alert(msg.message); },
        
         );
}

} 