let a = 'jnjcenj';
let b = '4';

/**
 * Write a function which returns the sum of integers passed as parameters
 * -- 
 * 
 */
function addition(a, b) {
    return parseInt(a) + parseInt(b);
}

function addition(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (isNaN(a) || isNaN(b)) return;

    return a + b;
}

console.log(addition(a, b));