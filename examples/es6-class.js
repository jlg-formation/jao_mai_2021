'use strict';

class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log('Hello I am ' + this.name);
  }
}

class Employee extends Person {
  constructor(wage, name) {
    super(name);
    this.wage = wage;
  }

  raise(percentage) {
    this.wage *= 1 + percentage;
  }
}

var alice = new Person('Alice');
console.log('alice: ', alice);
alice.talk();

var bob = new Person('Bob');

console.log('bob: ', bob);
bob.talk();

console.log('class of bob: ', bob.constructor.name);

const charly = new Employee(1000, 'Charly');
console.log('charly: ', charly);

console.log('charly instanceof Employee: ', charly instanceof Employee);

console.log('charly instanceof Person: ', charly instanceof Person);

console.log('charly instanceof Object: ', charly instanceof Object);
