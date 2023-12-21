import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private rota: Router) {}

  //Funçãopara sair do sistema
  sair(): void {
    //Excluir o email do localstorage
    localStorage.removeItem('email');

    //Apagaria tudo que está contido no local storage
    // localStorage.clear();

    //Redirecionanar para login
    this.rota.navigateByUrl('/login');
  }
}
