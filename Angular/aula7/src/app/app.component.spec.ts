// Importações

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Pessoa } from './pessoa';

// Descrição do teste unitário
describe('AppComponent', () => {
  // Inicialização
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  //Validar a variável/função texto.
  it('Validar variável de texto', () => {
    // Fixture
    const fixture = TestBed.createComponent(AppComponent);

    // Obter variaveis e funções do componente
    const componente = fixture.componentInstance;

    // Validação
    expect(componente.texto).toEqual(
      'Aprendendo a trabalhar com o Jamine o Karma'
    );
  });

  // Validar a função soma
  it('Validar a função soma', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const componente = fixture.componentInstance;

    // Executar função e obter retorno
    let retorno = componente.soma(1, 9);

    expect(typeof retorno).toBe('number');
  });

  // Validar a função retornarPessoa
  it('Validar a função retornarPessoa', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const componente = fixture.componentInstance;

    // Obj do tipo pessoa
    const obj = new Pessoa('Jasmine', 23);

    // Executar função
    const retorno = componente.retornarPessoa(obj);

    // Validação do obj pessoa
    expect(retorno instanceof Pessoa).toBeTrue();
  });
});
