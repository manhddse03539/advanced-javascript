// Destructuring : separate the data in array or object
// Array
const arrA = [1, 2, 3, 4, 5, 6];
const [a, b, c] = arrA;
const [d, ...e] = arrA;
const [f, , , , , g, h] = arrA;
console.log(a,c);
console.log(e);
console.log(g,7);

// Object
const objA = {
    x : 1,
    y : 2,
    z : 3
}
const {x, y, z} = objA;
console.log(x, y, z);