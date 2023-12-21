class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} fez algum tipo de som.`);
  }
}

let animal = new Animal("Simba");
animal.falar();

// Herança
class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  falar() {
    console.log(`${this.nome} latiu.`);
  }
}

let cachorro = new Cachorro("Rex");
cachorro.falar();