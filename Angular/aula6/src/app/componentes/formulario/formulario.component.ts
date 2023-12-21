import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Aluno } from '../../modelo/aluno';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {

  // Obter a função cadastrarAluno do componente principal
  @Output() cadastrarAluno = new EventEmitter<Aluno>();

  // Função para cadastrar um novo aluno
  cadastrar():void{
    this.cadastrarAluno.emit(this.formulario.value as Aluno);
    this.formulario.reset();
  }

  // Formulario
  formulario = new FormGroup({
    nome: new FormControl(''),
    nota1: new FormControl(''),
    nota2: new FormControl('')
  });
}
