// Spread : transform an array, oject become to elements 
var arr1 = [1, 2, 3];
var arr2 = [...arr1, 4, 5, 6];
console.log(arr2);


const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: { e: 10 }
}

var obj2 = {
    ...obj1,
    f: 11
};
console.log(obj2);

var apartment = {
    bedroom: {
        area: 20,
        bed: {
            type: 'twin-bed',
            price: 100
        }
    }
};

// use deepclone to clone an object and change value of copy object. It will not effect to main 
function deepClone(mainObj, copyObj) {
    for (let key in mainObj) {
        if (typeof mainObj[key] == 'object') {
            copyObj[key] = {};
            deepClone(mainObj[key], copyObj[key]);
        }
        else {
            copyObj[key] = mainObj[key];
        }
    }
    return copyObj;
}
var cloneObj = deepClone(apartment, {});
cloneObj.bedroom.bed.type = 'single-bed';

console.log(apartment);
console.log(cloneObj);

// use JSON.Parse JSON.stringfy object to handle above problem
var cloneObj2 = JSON.parse(JSON.stringify(apartment));
cloneObj2.bedroom.bed.type = 'king-bed';
console.log(cloneObj2);