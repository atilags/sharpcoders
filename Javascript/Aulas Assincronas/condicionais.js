let sum = 1+1;

if(sum === 2){
    console.log("O valor é 2");
}else if(sum === 3){
    console.log("O valor é 3");
}else{
    console.log("O valor não é 2 e nem 3");
};

let sum1 = 2+2;
let sum2 = 3+3;

// Condicional E = &&
if(sum1 === 4 && sum2 === 6){
    console.log("Os valores são 4 e 6");
}

// Condicional ou = ||
if(sum1 === 4 || sum2 === 6){
    console.log("Um dos números está correto.");
}

// Ternario
let result = sum === 2 ? "O valor é 2" : "O valor não é 2";
console.log(result);

// Switch case
let car = 'Mercedes';

switch(car){
    case 'Ferrari':
        console.log('Ferrari');
        break;
    case 'Tesla':
        console.log('Tesla');
        break;
    case 'Mercedes':
        console.log('Mercedes');
        break;
    default:
        console.log('Carro desconhecido');
}