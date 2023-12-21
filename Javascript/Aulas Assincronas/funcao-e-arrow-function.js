function sum(a, b){
    console.log(a+b);
}

sum(2, 4);


function sum2(a, b){
    return a+b;
}

let soma = sum2(2, 9);
console.log(`Resultado: ${soma}`)

// Arrow function
let sum3 = ((a, b) => {
    return a+b;
})

let soma2 = sum3(4, 9);
console.log(`Resultado: ${soma2}`)