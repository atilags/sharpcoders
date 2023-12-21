import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnderecoService } from '../../servicos/endereco.service';

@Component({
  selector: 'app-endereco',
  standalone: true,
  //Importar FormsModule quando se usa ngModel
  imports: [FormsModule],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.css'
})
export class EnderecoComponent {
  
  constructor(private servico:EnderecoService){}
  
  // Variavel cep
  cep:string = '';


  // Função para obter o endereço
  obterEndereco():void{
    this.servico.retornarEndereco(this.cep).subscribe(retorno =>{
      console.table(retorno);
    })
  }
}
