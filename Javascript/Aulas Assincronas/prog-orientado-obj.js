class Pessoa{
    constructor(primeiroNome, ultimoNome, idade){
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.idade = idade;
    }

    getNomeCompleto(){
        return `${this.primeiroNome} ${this.ultimoNome}`;
    }

    static falar(){
        console.log(`Hello World!`);
    }
}

let pessoa = new Pessoa('Jane', 'Doe', 40);

// Imprimir o objeto completo
console.log(pessoa);


// Chamando uma função do objeto
let nomeCompleto = pessoa.getNomeCompleto();

console.log(nomeCompleto);


// Chamando um metodo static, que pode ser chamado diretamente pela classe.
Pessoa.falar();