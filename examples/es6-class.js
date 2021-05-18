'use strict';

class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log('Hello I am ' + this.name);
  }
}

var alice = new Person('Alice');
console.log('alice: ', alice);
alice.talk();

var bob = new Person('Bob');

console.log('bob: ', bob);
bob.talk();
