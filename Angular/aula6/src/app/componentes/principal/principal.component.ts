import { Component } from '@angular/core';
import { Aluno } from '../../modelo/aluno';
import { FormularioComponent } from '../formulario/formulario.component';
import { TabelaComponent } from '../tabela/tabela.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormularioComponent, TabelaComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Vetor de alunos
  vetor:Aluno[] = [
    {nome:'Alice', nota1: 8, nota2: 10},
    {nome:'Bob', nota1: 7, nota2: 5},
    {nome:'Carol', nota1: 9, nota2: 8},
  ];

  // Cadastrar um novo aluno
  cadastrarAluno(aluno:Aluno):void{
    this.vetor.push(aluno);
  }
}