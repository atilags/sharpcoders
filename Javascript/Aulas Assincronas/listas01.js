let names = ['Felipe', 'João', 'Julia', 10, false];

let pessoa = names[0];

console.log(pessoa);

// Remove o primeiro elemento da lista
names.shift();
console.log(`Remove o primeiro elemento da lista: ${names}`);

// Informa a quantidade de itens na lista.
console.log(`Informa a quantidade de itens na lista: ${names.length}`);

// Remove o último elemento da lista
names.pop();
console.log(`Remove o ultimo elemento da lista: ${names}`);

// Adiciona um elemento ao final da lista
names.push('Pedro');
console.log(`Adicionou um item ao final da lista: ${names}`);

// Retornar o index de um elemento
console.log(`Retorna o index de algum item escolhido: ${names.indexOf('Julia')}`);

// Remover um item da lista. Primeiro número é o index, segundo número é a quantidade de itens excluidos, a partir do index informado.
names.splice(1, 1);
console.log(`Remove um item da lista pelo index: ${names}`);

// Organizar em ordem alfabetica.
names.sort();
console.log(`Ordem alfabetica: ${names}`);

// Informa se a variavel informada é um array.
console.log(`A variavel é um array: ${Array.isArray(names)}`);