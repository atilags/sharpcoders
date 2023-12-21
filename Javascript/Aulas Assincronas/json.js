let tarefas = [
    {
        id: 1,
        descricao: 'Estudar programação',
        concluida: false
    },
    {
        id: 2,
        descricao: 'Ler',
        concluida: true
    },
    {
        id: 3,
        descricao: 'Treinar',
        concluida: true
    }
];

// Criando arquivo Json
let tarefasJson = JSON.stringify(tarefas);
console.log(tarefasJson);


// Criando uma lista a partir de um arquivo Json
let tarefasLista = JSON.parse(tarefasJson);
console.log(tarefasLista);