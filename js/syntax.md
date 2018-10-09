---
title: Syntax
sidebarDepth: 3
footer: Copyright © 2018 Yuzhang Huang
---
# JavaScript Syntax
::: tip Description
Basic Javascript Syntax Notes
:::

## Introduction
### print
``` javascript
console.log()

// use "," to print several things inside one console.log, eg:
console.log('apple','banana')
// result will be like (note there will be a space in between):
> apple banana

// if the string has "'", you should use a "\" before it,eg:
console.log('My friend\'s cat')
```
### Operators
#### Math Operators
``` javascript
// plus, minus, multiply, subtract, remainder
+, -, *, /, % 
```
#### Comparison Operators
``` javascript
// greater than, less than, greater than or equal to, less than or equal to
>, <, >=, <=

// equal to, not equal to
===, !==
```
#### Logical Operators
``` javascript
// both true, both false, opposite&&, 
||, !
```
### Random & Round Number
``` javascript
// random number
Math.random()

// round number
Math.floor()
```
### Comments
``` js
// single line comment
​
/*
 multiple line comments
*/
```
## Variables
Variables can hold any data type, like strings, numbers, and Booleans. They can also hold data types like arrays, functions and objects...
``` js
// define a variable
var currentTime = '6:00AM'

// assign a new value (change the value)
currentTime = '8:00AM'
```
## String Interpolation（文本插值）
We can use the `+` operator from earlier to interpolate (insert) a variable into a string, like this:
``` js
var favoriteAnimal = 'fish'
console.log('My favorite animal:' + favoriteAnimal)
```
::: tip
use + to insert a variable into a string, so the result from above is like "My favotite animal:fish", note there is no space between ":" and "fish".

recall in the Introduction -> [Print](#print), there is a space in between.
:::
## Control Flow（流程控制）
In programming, making decisions with code is called control flow.
### `if`/`else`/`else if` Statements
``` js
if (condition 1) {
    // a block to do some actions
} else if(condition 2){
    // a block to do some other actions
} else {
    //another block to do something else
}
```
### `switch` Statement
To a computer, a `switch` statement and an `if/else` statement are the **same**, but a `switch` statement can be easier for other humans to read.
``` js
var groceryItem = 'papaya';
​
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
```
## Functions
Parameters are variables that we can set when we call the function, a function can has multiple parameters and parameters are not mandatory for a function, but the brackets are always come with the function, eg: `funcName()`.
``` js
function functionName(parameter1,parameter2,...) {
  // some actions here
}
```
### return
Instead of using `console.log()` within function blocks, use `return` makes programs more maintainable and flexible.
``` js
function getRemainder(numberOne, numberTwo) {
  return numberOne % numberTwo;
}
​
console.log(getRemainder(365, 27));
// Output: 14
```
## Scope
***Scope*** is the idea in programming that some variables are accessible/inaccessible from other parts of the program.

* ***Global Scope*** refers to variables that are accessible to every part of the program.
* ***Functional Scope*** refers to variables created inside functions, which are not accessible outside of its block.
``` js
var globalVariableName = 'some thing'
​
function foo(){
    var funcVar = 'hidden'
}
​
// below line will print the variable's value
console.log(globalVariableName)
> some thing
​
// below line won't show any result on console
console.log(funcVar)
>  
```
## Arrays
Arrays are JavaScript's way of making lists. These lists can store different data types and they are ordered, meaning the position of each list item is numbered by JavaScript.

Create an array and store it in a variable:
``` js
var arrayName = ['a', 'b', 'c']
```
### Property Access
Inside of an array, each item has its own numbered position identification, started from `0` not `1`.
::: tip
This also can be used for string
:::
``` js
var arrayName = ['a', 'b', 'c']
console.log(arrayName[0]) // will print a
console.log(arrayName[1]) // will print b
console.log(arrayName[2]) // will print b
```
::: tip
Another way to understand this: insert the numbered position identifications in between the items, also before the first one: 

     0      1       2
         a       b      c
:::
### Length Property
Use length Property to find the number of items of an array:
``` js
var arrayName = ['a', 'b', 'c']
console.log(arrayName.length)
> 3
```
::: tip
This also can be used for string
:::


