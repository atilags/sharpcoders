import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'
})
export class Componente1Component {

  //Criação de variavel.
  texto:string = 'Hello World!!';

  //Criar um Objeto
  pessoa:any = {
    'nome':'Julio',
    'idade':36
  };
  
}
