var obj = {
    name : 'Manh',
    hello : function () {
        var hello2 = () => {
            console.log(`Hello ${this.name}`); // 'this' in arrow function it have no context. So 'this' here it's outside function context
        }
        hello2();
    }
};
obj.hello();