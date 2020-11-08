// call : method calls a function with a given 'this' value and arguments provided in that function.
const cat = {
   name : 'Tom',
   age : 2 
}
function instroduce(food) { 
    console.log(`Hi my name is ${this.name}. ${this.age} years old. I like eat ${food}`); 
}

instroduce.call(cat, 'mouse');

// apply : method calls a function with a given 'this' value and arguments provided as array or array like object in that function.

function sum() {
    var numbers = Array.from(arguments);
    return numbers.reduce((currentValue, num) => currentValue + num, 0);
}

function average() {
    var total = sum.apply(null, arguments);
    return total/arguments.length;
}

console.log(average(1, 2, 3, 6));