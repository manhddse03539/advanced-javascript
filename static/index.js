class Foo {
    static methodA() {
        console.log('method A');
    }
    methodB() {
        console.log('method B');
    }
}

// Foo.methodA();
var x =  new Foo();
x.methodB();

// Different static method and nomarl methob in class
// - Static method : it can be called by directly
// - Normal method : call from prototype of class or firtly, create an object from class, then it can be called by directly