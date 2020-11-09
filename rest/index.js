// rest (phần còn lai) : use in this case when function it have a lot of parameters. Close arguments but 
// rest return an array, arguments return an array-like object

function sum (...numbers) {
    console.log(numbers.reduce( (a,b) => a+b));
}
sum(1,2,3,5);

function concat(separator, ...spellStrings) {
    console.log(spellStrings.join(separator)); // transfer elements of array to string with separator is ','
}

concat('-', 'T', 'O', 'K', 'U', 'D', 'A');

// concat arrays
function concatArray (...arrays) {
    console.log(arrays.reduce( (a,b) => a.concat(b)));
}
var arrA = [1,2,3];
var arrB = [4,5,6];
concatArray(arrA,arrB);