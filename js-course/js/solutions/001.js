let fruits = [
    ['banana', 'yellow'],
    ['apple', 'green'],
    ['orange', 'orange'],
    ['strawberry', 'red'],
];

let fruit = 'apple';

/**
 * Please write a function returning the color of the fruit. 
 * -- 
 *  
 */

function getFruitColor(fruit, fruits) {
    let result;

    fruits.forEach((element) => {   
        if (fruit === element[0]) {
            result = element[1];
        }
    });

    return result;
 }

 console.log(getFruitColor(fruit, fruits));