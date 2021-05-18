'use strict';

function Person(name) {
  this.name = name;
}

Person.prototype.talk = function () {
  console.log('Hello I am ' + this.name);
};

function Employee(wage, name) {
  Person.bind(this)(name);
  this.wage = wage;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);

// Watch out: use with caution.
Employee.prototype.__proto__ = Person.prototype;

Employee.prototype.raise = function (percentage) {
  this.wage = this.wage + percentage * this.wage;
};

var alice = new Person('Alice');
console.log('alice: ', alice);
alice.talk();

var bob = {};
Object.setPrototypeOf(bob, Person.prototype);
Person.bind(bob)('Bob');

console.log('bob: ', bob);
bob.talk();
