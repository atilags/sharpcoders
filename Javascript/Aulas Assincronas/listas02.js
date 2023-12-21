let numeros = [1, 2, 3, 4, 5];
console.log(`Numeros iniciais: ${numeros}`)


// Comando map, para realizar uma função em cada local da lista.
// let numerosMultiplicados = numeros.map(function(n){
//     return n*2
// });
let numerosMultiplicados = numeros.map(n => n*2); // Arrow function
console.log(`Numeros multiplicados por 2: ${numerosMultiplicados}`);


// Comando filter, retornando somente o resultado desejado.
let idade = [8, 13, 27, 30 , 22, 40];
// let idadePar = idade.filter(function(n) {
//     return n % 2 == 0
// });
let idadePar = idade.filter(n => n % 2 === 0);
console.log(`Numeros pares: ${idadePar}`);


// Comando reduce, o contador recebe o valor de cada index que passa. Inicialmente valendo 0, depois 8, depois 8+13 e etc
let idade2 = [8, 13, 27, 30 , 22, 40];
let reduzido = idade2.reduce((n, contador) => contador + n , 0);
console.log(`Reduzindo para 1 item: ${reduzido}`)