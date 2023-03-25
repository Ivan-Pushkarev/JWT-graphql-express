A variable is a memory cell in which data is stored.

The variable looks like a box with a label. The box holds the data. The label says what is stored in the box.

A variable always has a name. We use it to refer to this variable.

Examples of what can be stored in variables:

* names
* numbers
* dates
* addresses
* price tags
* unique identifiers (id)
* and many other things that can be represented as data

## Ways to create a variable

In order to use a variable, it must first be created.

Modern JavaScript uses two ways to create variables: `const` and `let`.

#### The keyword is `const`. The value of the variable cannot be changed

Terminology: `const` - constant. A variable whose value does not change. Read only.

It is used to store values that will not change during program execution.

The value of the variable must be set at creation.

```javascript
const name = 'Alice'; // the 'name' variable is created, with the value 'Alice'
console.log(name); // the console displays 'Alice'

const age = 45; // the 'age' variable was created and assigned value 45
console.log(age); // console output 45 
```

When using `const` it is not possible to create a variable without a value.

```javascript
const name; // You can't do that. Error: Missing initializer in const declaration
```

If you try to change the value of the variable, there will be an error.

```javascript
const name = 'Alice';
name = 'Bob'; // You can't do that. Error: Assignment to constant variable.
```

If you do not plan to change the value of a variable, use `const`.

#### The keyword is `let`. The value of the variable can be changed

The keyword `let` is for variables that can change their value.

```javascript
let name = 'Alice';
console.log(name); // the console displays 'Alice'

name = 'Bob'; // the 'name' variable is now set to 'Bob'.
console.log(name); // console output 'Bob'
```

The `let` keyword can be used to create a variable with no value.

```javascript
let name; // the 'name' variable is created, no value
console.log(name); // the console displays 'undefined'

name = 'Alice'; // value 'Alice' was output
console.log(name); // console output 'Alice'
```

If you plan to change the value of a variable, use `let`.

### The obsolete way to create a variable is with the `var` keyword

There is an obsolete way to create variables - `var`.

It is not recommended for use because it does not have some of the properties that `const` and `let` have.

### Variable without a keyword

If you do not use the `const`, `let` or `var` keyword when creating a variable, it will be created as a global variable.

```javascript
name = 'Alice';
console.log(name); // the console displays 'Alice'
```

This is not recommended because global variables can be accessed in any part of the code, which can lead to errors.

Use only the `const` or `let` keywords to create variables.
