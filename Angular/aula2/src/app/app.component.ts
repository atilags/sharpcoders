import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Pg1Component } from './pg1/pg1.component';
import { Pg2Component } from './pg2/pg2.component';
import { Pg3Component } from './pg3/pg3.component';
import { Pg404Component } from './pg404/pg404.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, Pg1Component, Pg2Component, Pg3Component, Pg404Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula2';
}
