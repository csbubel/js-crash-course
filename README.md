# JavaScript Crash Course

This repository is meant to teach the essential language features of JavaScript by developing a mock chat application from scratch - no libraries (assuming your browser supports all ES2015/ES6 features), except Jasmine.

### How does this crash course work?

1. Clone the directory
2. Navigate to the `/src` directory and copy the full path of the `src/index.html` file into your browser
3. Notice that Jasmine unit tests are being run, but they're all failing
4. Fill out the code in `/src/js` so that the unit tests pass
5. Reference the `/ref/js` directory if you get stuck

### Useful links:

* [ES2015 compatibility chart](https://kangax.github.io/compat-table/es6/)
* [Babel document on ES2015 features](https://babeljs.io/docs/learn-es2015/)
* [Mozilla JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

### Major concepts include:

* Object oriented features (classes, inheritance, etc.)

```javascript
class Sedan extends Vehicle {
    constructor(color) {
        this.color = color;
    }

    drive() {

    }
}
```
        
* Variable declarations (let and const)

```javascript
const numWheels = 4; // Cannot be reassigned
let color = "Blue" // May be reassigned
```

* Arrow functions

```javascript
cars.forEach(car => car.drive());
```

* Template strings

```javascript
const description = `The car is ${this.color} and has ${this.numWheels} wheels.`;
```

* Promises

```javascript
function waitAndGo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done"), 1000);
    });
}

waitAndGo().then(message => {
    console.log(message);
});
```

* Maps and sets

```javascript
let s = new Set();
s.add("Sedan");
s.add("Sedan");
console.log(s); // Set {"Sedan"}
```

* Default, rest, and spread

```javascript
// Default
function(name = "Anonymous") {
    const output = `Hello ${name}`;
}

// Rest
function manyArgs(...args) {
    console.log(args.length);
}

// Spread
function addToArray(anArray) {
    someOtherArray.push(...anArray);
}
```

* Destructuring

```javascript
function multipleReturns() {
    const result1 = 3.14;
    const result2 = 2.72;
    return [result1, result2];
}

let a, b;
[a, b] = multipleReturns(); // a = 3.14, b = 2.72
```
