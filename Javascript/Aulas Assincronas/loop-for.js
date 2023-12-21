// Loop FOR
for (let index = 0; index < 3; index++){
    console.log(index);
}

let cars = ['Ferrari', 'Tesla', 'Mercedes'];

for (let i=0; i<cars.length; i++){
    console.log(`For comum, posição ${i}: ${cars[i]}`)
}


// Loop for of
for (let car of cars){
    console.log(`For of: ${car}`);
}


// Loop for each
cars.forEach(function(car, index){
    console.log(`Index: ${index}, Carro: ${car}`);
});


// Loot for in, usado para objetos. Não costuma ser usado, por não ter uma boa performance.
let pessoa = {
    name: 'Jane',
    age: 21
};

for(propriedade in pessoa){
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}