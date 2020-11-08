// array like object : is an object and it has property is length
const obj = {
    0 : 'A',
    1 : 'B',
    2 : 'C',
    length : 3
}
for (let i = 0 ; i < obj.length; i++) {
    console.log(obj[i]);
}

// arguments : is variable that includes parameters these are passed when calling function (except arrow function)
function sum() {
    var numbers = Array.from(arguments);
    var result =  numbers.reduce((currentValue, num) => {
        return currentValue + num;
    }, 0)
    console.log(result);
}
sum(1, 4, 6, 7, 10);