We know strings, numbers, and functions. Let's look at how we can combine one with the other.

Let's create a greeting function `greeting` that takes the name `name`.

Inside the function, create a variable `message` and assign a greeting to it. Output the result of the function to the console.

```javascript
function greeting(name) {
  const message = 'Hello ' + name; // we create a variable and set its value using string concatenation
  return message; // return the result of the variable's work
}

console.log(greeting('Alice')) // Hello Alice result of the function
console.log(greeting('Bob')) // Hello Bob result of the function
```

Consider the example of combining variables and functions in the example above. 

#### Assigning a variable value to a function

Outside the function, create variables `personName1` and `personName2`. Assign them the values `Alice` and `Bob` respectively.

Let's call a function in the console that will accept these variables instead of `name`:

```javascript
const personName1 = 'Alice'; // create a variable and assign a value to it
const personName2 = 'Bob'; // create a variable and assign a value to it

console.log(greeting(personName1)) // the Hello Alice function took the value of the personName1 variable instead of name
console.log(greeting(personName2)) // // the Hello Bob function took the value of the personName2 variable instead of name
```

#### Assigning to a variable the result of a function

Create two more variables `greetingPerson1` and `greetingPerson2`. 

We assign the result of the `greeting` function to these variables (what is written to the console in the example above). 

Let's display the result of the variables.

```javascript.
const greetingPerson1 = greeting(personName1); // assign the variable to the value of the greeting function that took the value of the variable personName1
const greetingPerson2 = greeting(personName2); // assign a variable to the value of the greeting function that took the value of the personName2 variable

console.log(greetingPerson1) // Hello Alice the result of the variable that took the value of the function
console.log(greetingPerson2) // Hello Bob is the result of the variable that took the value of the function
```

As we can see, the result in all the examples is the same.

In variables we can write the intermediate result or the result of a function. 

You can use variables both inside and outside the function. 

It is important to remember that variables that are created inside a function are not visible outside the function.

