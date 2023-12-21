import { Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { autenticarGuard } from './seguranca/autenticar.guard';
import { ErroAcessoComponent } from './paginas/erro-acesso/erro-acesso.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [autenticarGuard] },
  { path: 'erro-acesso', component: ErroAcessoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: ErroAcessoComponent },
];
