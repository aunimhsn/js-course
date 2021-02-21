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

    fruits.forEach((fruit) => {   
        if (fruit.length != 2) return;

        if (fruitName === fruit[0]) {
            result = fruit[1];
        }
    });

    return result;
 }

 console.log(getFruitColor(fruitName, fruits));