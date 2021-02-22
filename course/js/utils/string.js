/**
 * String props and methods
 * 
 */
let str = 'Hello world!';
str.length; // 12
str.toLowerCase; // hello world!
str.toUpperCase; // HELLO WORLD!
str.substr(1, 2); // el
str.split(' '); // ['Hello', 'World!']
str.split(' ').length; // 2 (Word counter example)

let badStr = ' John';
badStr.trim(); // 'John' without extra whitespace