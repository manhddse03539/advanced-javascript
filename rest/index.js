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