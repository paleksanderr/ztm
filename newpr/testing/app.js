class Player {
  constructor(name, zawodnik, numer) {
    this.name = name;
    this.type = zawodnik;
    this.numer = numer;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}, a ${this.type} and my number is ${this.numer}`);
  }
}
class Wizard extends Player {
  constructor(name, type, numer) {
    super(name, type, numer);
  }
  play() {
    console.log(` HIIIIII!!! i'm a ${this.type}`);
}}
class Warrior extends Wizard {
  constructor(na, ty, nr) {
    super(na, ty, nr);
  }
  war() {
    console.log(` HIIIIII!!! i'm a ${this.type} and I'll kill you!!!! ${this.numer}`);
}}

const wizard1 = new Wizard('Shelly', 'Healer', 15);
const wizard2 = new Wizard('Shawn', 'Dark Magic');
const wizard3 = new Wizard('John', 'Healer');
const warrior1 = new Warrior('Janusz', 'Zabijaka', 'dzialo???')