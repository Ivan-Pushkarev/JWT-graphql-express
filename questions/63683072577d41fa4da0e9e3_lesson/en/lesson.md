JavaScript uses 2 keywords when creating variables: `let` and `const`.

Their application depends on whether the value of the variable will change.

### Creating a variable with the `const` keyword

If the value of the variable will not change, you must use `const`.

If the `const` keyword is used, the value of the variable must be set immediately.  

#### If the value is not set, an error `SyntaxError` will be thrown  

Check this by running each of the examples in the console:

```javascript
const number; // SyntaxError, no variable value was set
const str; // SyntaxError
const isHotWeather; // SyntaxError
const line; // SyntaxError
```

#### Attempting to change the value of a variable with the `const` keyword will result in a `TypeError` error

Run the variables below in the console and see for yourself:

```javascript
const number = 12345; 
number = 98765; // TypeError, an attempt to change a value with the `const` keyword.

const str = 'How are you doing?' 
str = 'How are you?'; // TypeError
```

### Creating a variable with the keyword `let`

If the value of the variable will change, you must use the keyword `let`.

The `let` allows you to assign a new value to a variable.

It is not necessary to use the word `let` when changing the value.

```javascript
let num = 5; // create a variable with keyword `let`.
console.log(num); // 5 is the value of the variable
num = 10; // changed the value of num variable
console.log(num); // 10 is the new value of the variable
```

#### One line variable declaration

To keep the code short you can declare variables on one line. Variables are enumerated separated by commas.

```javascript
let num = 5, newNum = 15, oldNum = 10; // create three variables
console.log(num, newNum, oldNum); // 5, 15, 10 are the values of the variables
```

#### Creating an empty variable

If you use the `let` keyword you can create a variable and assign a value to it later.

```javascript
let telNumber; // create a variable
telNumber = 15058768956; // let's set the variable value
console.log(telNumber); // 15058768956 is the value of the variable
```

#### Calling a variable before it is declared

Calling a variable without a value will return `undefined`. You can assign a new value to a variable using the assignment operator `=`.

```javascript
let str; // create a variable
console.log(str); // undefined, the variable has no value
str = 'Hello, QA student!'; // set the variable to a value  
console.log(str); // "Hello, QA student!" - variable value
```

#### Redefining a variable value

The value of a variable can be redefined several times. In this case the variable will have the last value.

```javascript
let line; // create a variable        
line = 'Coding challenge'; // assign a value to the variable
line = 100; // we changed the value of the variable
console.log(line); // 100, the last modified value is output
```
