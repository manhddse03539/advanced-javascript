class HomeWork {
    clean() {
        console.log('Clean the sofa');
    }
}

class Cleaner extends HomeWork {
    clean(callbackFunc) { // inheritance and overriding clean method
        console.log('Clean the sofa and washes');
        callbackFunc();
    }
}

var doHomeWork = new Cleaner();
doHomeWork.clean(function() {
    console.log('Cooking');
});