'use strict';

function Person(name) {
  this.name = name;
}

Person.prototype.talk = function () {
  console.log('Hello I am ' + this.name);
};

var alice = new Person('Alice');
console.log('alice: ', alice);
alice.talk();

var bob = {};
Object.setPrototypeOf(bob, Person.prototype);
Person.bind(bob)('Bob');

console.log('bob: ', bob);
bob.talk();
