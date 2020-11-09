// enhanced object literals : help to declare shorter properties and functions of an object
var name = 'Tom';
var age = 2;

const cat = {
    name,
    age,
    greeting() {
        console.log(`Hello, my name is ${this.name}. Im ${this.age} years old`);
    }
}

cat.greeting(cat)