let fruits = [
    ['banana', 'yellow'],
    ['apple', 'green'],
    ['orange', 'orange'],
    ['strawberry', 'red'],
];

let fruitName = 'apple';

/**
 * Please write a function returning the color of the fruit. 
 * -- 
 *  
 */

function getFruitColor(fruitName, fruits) {
    let result;

    for (const fruit of fruits) {
        if (fruit.length !== 2) continue;

        if (fruitName === fruit[0]) {
            result = fruit[1];
            break;
        }
    }

    return result;
 }

 console.log(getFruitColor(fruitName, fruits));