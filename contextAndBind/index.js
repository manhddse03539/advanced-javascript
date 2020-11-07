var mouse = {
    name : 'Mickey',
    sayHello : function() {
        console.log(`Hello, my name is ${this.name}`);
        // console.log(`Hello, my name is ${this.name}`); // when use arrow function, 'this' can not reference outside
    }
}
// var say = mouse.sayHello; // if call say() -> Hello, my name is undefined. Because 'this' of say is global. So can not reference inside mouse function
var say = mouse.sayHello.bind(mouse); // create a new function that when called 'this' keyword set provided value in object mouse
say();