// inheritance in  opp
class Animal {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log('Eating...');
    }
}

class Bird extends Animal {
    fly() {
        console.log('Flying...');
    }
}

var x = new Bird('Flappy',2);
console.log(x);

// inheritance in es6
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.eat = function() {
    console.log(`He is ${this.name}, ${this.age} years old and he is eating...`);
}

var dancer = new Person('David', 26);
console.log(dancer);
dancer.eat();