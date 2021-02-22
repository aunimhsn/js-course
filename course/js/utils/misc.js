/**
 * Ways to show data, for debugging purposes
 * 
 */
alert('Hello World!');
console.log('Hello World!');
console.warn('This is a warning');
console.error('This is an error');

/**
 * Ways to set variables
 * 
 * var: obsolete, declare a global variable, it is not scoped within the function and/or the control structure
 * let: scoped variable
 * const: define a constant, it is not reassignable
 */

var age = 22;
let score = 0;
const firstName = 'John';

/**
 * Variables with different data types
 * 
 */
let firstName = 'John';      // String
let age = 22;           // Number
let rating = 4.5        // Number
let isCool = true;      // Boolean
let x = null;           
let y = undefined;
let z;

console.log(typeof rating); // The following returns: number as well as age

/**
 * Concatenation
 * 
 */
console.log('My name is ' + firstName + ' and I am ' + age);


/**
 * Template strings
 * ES6*
 * 
 */
console.log(`My name is ${firstName} and I am ${age}`);