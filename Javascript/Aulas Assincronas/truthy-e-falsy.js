// Uma string vazia, um número de valor 0, uma variavel esteja null ou undefined, ele seram false.
let x = '';
let y = 0;
let a = null;
let b = undefined;

// Verificar se é true ou false.
console.log(`O x é: ${!!x}`);
console.log(`O y é: ${!!y}`);
console.log(`O a é: ${!!a}`);
console.log(`O b é: ${!!b}`);

// Uma lista vazia ou objeto vazio, são true.
let lista = [];
let obj = [];

console.log(`A lista é: ${!!lista}`);
console.log(`O obj é: ${!!obj}`);

// Para verificar se existe algo em uma lista
if(lista.length > 0){
    console.log('Existe algo na lista.');
}else{
    console.log('Não existe nada na lista.');
}