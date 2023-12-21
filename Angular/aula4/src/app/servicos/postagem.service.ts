import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../modelos/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  // Necessita desse obj a baixo, para realizar requisições HTTP
  constructor(private http:HttpClient) { }

  // URLs
  private urlPostagem:string = 'https://jsonplaceholder.typicode.com/posts';

  // Metodo para retornar tossas as postagens Observable<tipo que será devolvido>
  getPostagens():Observable<Postagem[]>{
    return this.http.get<Postagem[]>(this.urlPostagem);
  }

  // Contido no RxJS
  // Observable: Faz requisições HTTP em periodo de tempo. Dentro dele está com os async e await. Não sendo preciso realizar eles manualmente.
  // Subscriver: Recebe o retorno da requisição HTTP, que está no objeto Observable.
}
