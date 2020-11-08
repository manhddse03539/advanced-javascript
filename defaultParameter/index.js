function greeting(name = 'Trump', language = 'jp') {
    if (language == 'jp') {
        console.log(`こんにちは ${name}`);
    } else if (language == 'eng') {
        console.log(`Hello ${name}`);
    } else {
        console.log(`Xin chào ${name}`);
    }
}
greeting(); // when dont pass parameters value, so function'll pass default parameters