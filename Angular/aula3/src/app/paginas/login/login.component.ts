import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  // Construtor
  constructor(private rota:Router) {}


  // Formulario
  formulario = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
  });

  // Função para autenticar
  autenticar(): void {
    if (
      this.formulario.value.email === 'atilagsobrinho@gmail.com' &&
      this.formulario.value.senha === '123'
    ) {

      // Lembrar de adicionar o e-mail do local storage
      localStorage.setItem('email', this.formulario.value.senha);

      // Redirecionar para a tela de admin
      this.rota.navigateByUrl('/admin');
    }else{
      this.rota.navigateByUrl('/erro-acesso');
      // alert('Email ou senha inválidos');
    }
  }
}
