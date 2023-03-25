Recall the number comparison operators:

`>` - more.

`<` - less.

`>=` - greater than or equal to

`<=` - less than or equal to

```javascript
console.log(3 > 2); // true
console.log(3 >= 3); // true
console.log(2 < 3); // true
console.log(2 <= 2); // true
```

Now let's look at comparison operators for equality and inequality:

### The strict equality operator `===` triple equal

It is written as a triple equal sign symbol `===`, and compares two values for equality.

The strict equality operator `===` checks for equality ** without ** type conversion.

This operator works as follows:

* `true` - if the operands have **same values and the same type**.
* `false` - if the operands have **same values and different types**.
* `false` - if the operands have **different values**.

```javascript
const n1 = 2;
const n2 = 3;
const n3 = 2;

console.log(n1 === n2); // false, 2 is not 3
console.log(n1 === n3); // true, 2 is 2
```

Now set the variable `n2` to a different type:

```javascript
const n1 = 2;
const n2 = '2';

console.log(n1 === n2); // false, though the values are the same, but the types are different
```

Let's look at a couple more examples:

```javascript
console.log(1 === true); // false
console.log(0 === false); // false
console.log(' === false); // false
```

To compare values of different types using the strict equality operator, cast the values to the same type:

```javascript
const n1 = false;
const n2 = !!'';

console.log(n1 === n2); // true, the string '' is brought to false
```

### Non-strict equality operator `==`

It is written as a double equal sign symbol `==` and also compares two values for equality.

When comparing the values of different types, **references** each of them to a number.

This operator works as follows:

* `true` - if the operands have **same values and the same type**.
* `true` - if the operands have **same values and different types**.
* `false` - if the operands have **different values**.

```javascript
const n1 = 2;
const n2 = '2';

console.log(n1 == n2); // true, the string '2' becomes the number 2
```

Let's look at a couple more examples:

```javascript
console.log(1 == true); // true
console.log(0 == false); // true
console.log(" == false); // true
```

Note. In JavaScript `===` and `==` are comparison operators, while `=` is an assignment operator.

If you mistakenly use `=` instead of `===` or `==`, you may get unwanted results.

### The strict inequality operator `!==`

Spelled like the single exclamation point character and the double equal sign character `!==`, it compares two values to an inequality.

The strict inequality operator `!==` tests an inequality **without** type conversion.

This operator works as follows:

* `false` - if the operands have **same values and the same type**.
* `true` - if the operands have **same values and different types**.
* `true` - if the operands have **different values**.

```javascript
const n1 = 2;
const n2 = 1;

console.log(n1 !== n2); // true, 2 is not equal to 1
```

Let's look at a couple more examples:

```javascript
console.log(1 !== 1); // false
console.log(1 !== 2); // true
console.log(1 !== '1'); // true
console.log(1 !== '2'); // true
```

### The non-strict inequality operator `!=`

Spelled as a single exclamation point character and a single equal sign character `!=`, it compares two values to an inequality.

When comparing the values of different types, **references** each of them to a number.

This operator works as follows:

* `false` - if the operands have **same values and the same type**.
* `false` - if the operands have **same values and different types**.
* `true` - if the operands have **different values**.

```javascript
const n1 = 2;
const n2 = 1;

console.log(n1 != n2); // true, 2 is not equal to 1
```

Let's look at a couple more examples:

```javascript
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log(1 != '1'); // false, '1' is cast to number 1
console.log(1 != '2'); // true
```

Let's try to use comparison operators in combination with `if`:

Let's say we're at a bus stop waiting for the No1 or No10 bus, and the No2 bus comes

```javascript
const bus = 2;

if (bus === 1) {
    console.log('Go!')
} else if (bus === 10) {
    console.log('Go!')
} else {
    console.log('Bus number is not 1 or 10') // the console will print 'Bus number is not 1 or 10'
}

if (bus !== 1) {
    console.log('Wait!') // the console will print 'Wait!'
}
```

To summarize:

`===` — returns `true` if the operands are **equal and of the same type**.

`==` — returns `true` if the operands are **equal**.

`!=` — returns `true` if the operands ** are not equal**.

`!==` — returns `true` if the operands are equal, but of **different type or not equal at all**.

To compare values for equality/inequality use `===`/`!==`, using `===`/`!=` **is not recommended** !
