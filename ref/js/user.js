class User {
    constructor(properties) {
        Object.assign(this, properties);
    }

    hello() {
        console.log("hello");
    }
}