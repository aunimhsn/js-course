/**
 * Please write a function which take an array of integers as parameter 
 * and double only the even values.
 * -- 
 *  
 */

let numbers = [8, 9, 13, 2, 87, 36]; // [16, 9, 13, 4, 87, 72]
let result = numbers.map(number => ((number % 2) === 0) ? number*2 : number);
console.log(result);

