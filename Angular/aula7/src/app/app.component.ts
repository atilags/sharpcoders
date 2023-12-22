import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Variavel de texto
  texto: string = 'Aprendendo a trabalhar com o Jamine o Karma';

  // Função para retornar a soma
  soma(n1: number, n2: number): number {
    return n1 + n2;
  }

  // Função para retornar um obj do tipo pessoa
  retornarPessoa(obj:Pessoa): Pessoa {
    return obj;
  }
}
