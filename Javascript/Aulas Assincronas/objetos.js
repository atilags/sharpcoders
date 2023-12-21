// Criando um objeto pessoa.
let pessoa = {
    primeiroNome: 'Átila',
    ultimoNome: 'Sobrinho',
    idade: 33,
    cidade: 'Rio de Janeiro',
    hobbies: ['Assistir seriados', 'Jogar', 'Sair para comer'],
    cao: {
        nome: 'Davi',
        idade: 8
    }
};


let primeiroNome = pessoa.primeiroNome;
let ultimoNome = pessoa.ultimoNome;
let idade = pessoa.idade;
let hobbies = pessoa.hobbies;

// let {
//     primeiroNome: primeiroNome,
//     ultimoNome: ultimoNome,
//     idade: idade,
//     hobbies: hobbies
// } = pessoa;


console.log(`Primeiro nome: ${primeiroNome}`);
console.log(`Ultimo nome: ${ultimoNome}`);
console.log(`Idade: ${idade}`);
console.log(`Segundo hobbie: ${hobbies[hobbies.length-1]}`);


// Adicionar um atributo novo.
// pessoa.cao = 'Davi';
// console.log(pessoa);