Name the variables in a way that makes it clear what they store.

The simpler and clearer the variable name, the better.

With practice you will learn to give variables meaningful names.

### Some examples of variables about the address

```javascript
const address = '123, Market street'; // Store the address
const city = 'San Francisco'; // city
const state = 'CA'; // state
const zipCode = '94107'; // zip code
```

All of these variables store something about the address, but the names of the variables make it clear what exactly is stored in them.

Note in this example the variable names consist of only one word.

It is not always possible to describe the contents of a variable in one word.

A few words are used to describe it more accurately.

For example, a variable that stores the username may be called `userName` or `userFirstName`.

### Example of variables about a dog

We want to create variables that store information about the dog. For example, name, age, breed and color.

You can do this:

```javascript
const name = 'Mango';
const age = 2;
const breed = 'shepherd';
const color = 'black';
```

These names for variables are acceptable, but not very informative.

The version with the prefix `dog` is better:

```javascript
const dogName = 'Mango';
const dogAge = 2;
const dogBreed = 'shepherd';
const dogColor = 'black';
```

So it is clear that the variables store information about the dog.

If there will be more entities in the program, for example, `cat`, `fish`, `bird`, then the names of the variables should be named so that it is clear what is stored in them.

```javascript
const catName = 'Poly';
const catAge = 3;
const catBreed = 'siamese';
const catColor = 'white';

const fishName = 'Nemo';
const fishAge = 1;
const fishBreed = 'clownfish';
const fishColor = 'orange';

const birdName = 'Tweety';
const birdAge = 2;
const birdBreed = 'canary';
const birdColor = 'yellow';
```

### Examples of correct and understandable variable naming

If we want to store the number of days in a year in a variable, it is better to call it `daysInYear` rather than `days`.

Variables will store data about the user.

`userName` - user name

`userAge` - user age

Let's imagine that we have a delivery box.

The variables will store the properties of the box.

`boxPrice` - box price

`boxColor` - box color

`boxWeight` - box weight

`boxMaterial` - box material

`boxQuantity` - number of boxes

`boxType` - box type

`boxWidth` - the width of the box

`boxHeight` - the height of the box

`boxLength` - the length of the box

`boxVolume` - box volume

`boxCapacity` - box capacity

`boxSize` - box size (e.g. `small`, `medium`, `large`)

Anyone who looks at these variables should be able to guess what is stored in them.

When there are several words in a name, we spell them together. This rule is called `Camel case` like the humps of a camel.

* all words are written together
* the first word is always with a small letter
* every next word with a capital letter

### An example of a two-word variable

```javascript.
const zipCode = '987A-987A'; // an index variable is created. The index is always written as string, string

const priceClient = 100; // create a variable 'client price' with the value 100
```

### An example of a variable name of several words

```javascript
const distanceFromClientToWarehouse = 456; // create a variable 'distance from customer to warehouse' with value 456

const deliveryAddressMain = '56 Second Second st, SF'; // variable 'main delivery address' was created. Assigned value
```

### In compound names, always put the entity first, followed by its property

```javascript
const phoneMain = 5556677; // create the variable 'main phone' with the value 5556677
const deliveryDriver = 'Andrew'; // the variable 'delivery name' was created with the value 'Andrew'. Delivery is the main entity here
```

## Errors in variable names

There are a few rules and mistakes to avoid when creating variables.

### Variables cannot begin with a number

```javascript
const 12month = 'December'; // the number can be at the end or in the middle
```

### You cannot use a minus in a name

```javascript.
const time-from-a-to-be; // use Camel case. And if you can't do without a dash, replace it with an underscore 
```

### You cannot use a space in the name

```javascript
const value Client; // always use Camel case
```

## A good tone when creating variables

These tips will help you create variables that are easy for other developers to read and understand.

### The first letter is always small.

```javascript.
const LastName; // Bad. We don't use capital letters at the beginning of the variable name.
const lastName; // Good. Using small letters at the beginning of the variable name
```

### The name must not contain the value of the variable

```javascript.
const lastNameAlice = 'Smith'; // Bad. The variable name contains the variable value
const phoneBob = '5556677'; // Bad. The variable's name contains the variable's value

const lastName = 'Smith'; // Good. The variable's name does not contain the variable's value.
const phone = '5556677'; // Good. The variable name does not contain the variable's value
```

### Use only English words in variable names

```javascript.
const mashina = 'A1R1'; // Bad. You need to create a variable named 'car'.

const español = 'Henry'; // Bad. We use English words only.
const 你好 = 'Hello'; // Bad. We use English words only.

const car = 'Volvo'; // Good
const stop = 'Main St' // Good
```

### The value of a variable can be anything

```javascript
const greetingEnglish = 'Hello'; // The greeting variable contains the string 'Hello'
const greetingChinese = '你好'; // The greeting variable contains the string '你好'
const greetingSpanish = 'Hola'; // The greeting variable contains the string 'Hola'
const greetingJapan = 'こんにちは'; // The variable greeting contains the string 'こんにちは'

const smile = '😀'; // The variable smile contains the string '😀
```

### Avoid using one-letter names

```javascript
const a = 'Hello'; // Bad. Do not use single-letter names.
const q = 123; // Bad. Do not use single-letter names.
const firstName = 'John'; // Good. We use the full name
```

If the context of your code is one-letter clear, you can use it, but ask yourself, is it necessary? In most cases, no.

Sometimes single-letter names can be useful, for example when you use a for loop. But in most cases you should avoid them.

It is not recommended to use abbreviations in variable names unless they are generally accepted.

Examples of abbreviations:

```javascript
const num = 123; // Some number
const str = 'Hello'; // Some string
const avg = 3.24; // Some negative number
const neg = -1; // Some negative number
const pos = 1; // Some positive number

const n1 = 123; // Some number
const n2 = 125; // Some number
const n3 = 129; // Some number
const n4 = 121; // Some number

const str1 = 'Hello'; // Some string
const str2 = 'World'; // Some string
```

Common sense should help you determine when to use abbreviations and when not to.

Do the assignments to reinforce the material.
