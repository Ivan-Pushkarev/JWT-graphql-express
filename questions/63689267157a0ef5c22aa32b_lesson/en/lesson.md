The `Boolean` data type can take 2 values: _**true**_ or _**false**_. We can get them by comparing numbers.

There are operators for comparing numbers:

`>` - returns `true` if the left operand is **more** than the right operand.

`>=` — returns `true` if the left operand **is greater than or equal to** the right operand.

`<` — returns `true` if the left operand is **smaller** than the right operand.

`<=` — returns `true` if the left operand is **less than or equal to** the right operand.

Examples:

```javascript
console.log(3 > 2);  // true - true, 3 is greater than 2
console.log(5 > 10);  // false - true, 5 is less than 10

console.log(5 < 10); // true
console.log(19 < 8); // false

console.log(20 >= 20); // true
console.log(30 <= 10);  // false
```

Variables can also be compared:

```javascript
const a = 35;
const b = 83;

console.log(a < b); // true
console.log(a > b); // false

console.log(a <= b); // true
console.log(a >= b); // false
```


### Equality comparison

For equality comparisons, the `===` triple equal operator is used. It returns `true` if the left operand is equal to the right operand.

```javascript
console.log(5 === 5); // true
console.log(5 === 6); // false
```

This also works with variables:

```javascript
const a = 5;
const b = 5;

console.log(a === b); // true
```

We will talk more about equality and inequality comparisons in the next lessons.
