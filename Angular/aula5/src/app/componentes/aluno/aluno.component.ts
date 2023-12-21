import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlunoService } from '../../servicos/aluno.service';
import { Aluno } from '../../Modelos/Aluno';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css',
})
export class AlunoComponent {
  // Vetor para armazenar alunos
  alunos: Aluno[] = [];

  // Formulario para cadastro de alunos
  formulario = new FormGroup({
    nome: new FormControl(''),
    nota1: new FormControl(''),
    nota2: new FormControl(''),
  });

  // Construtor
  constructor(private servico: AlunoService) {}

  // Método de inicialização, depois de toda estrutura ter sido carregada
  ngOnInit(): void {
    this.servico.selecionar().subscribe((dados) => {
      this.alunos = dados;
    });
  }

  // Método para cadastrar alunos
  cadastrar(): void {
    this.servico
      .cadastrar(this.formulario.value as Aluno)
      .subscribe((aluno) => {
        // Cadastrar no vetor de alunos
        this.alunos.push(aluno);

        // Limpar o formulário
        this.formulario.reset();
      });
  }

  remover(id: number): void {
    this.servico.remover(id).subscribe(() => {
      // Encontrar posição do aluno no vetor
      let posicaoAluno = this.alunos.findIndex((obj) => {
        return obj.id === id;
      });

      // Remover do vetor
      this.alunos.splice(posicaoAluno, 1);
    });
  }
}
