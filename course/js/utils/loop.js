/**
 * While
 * 
 */
let i = 0;
while(i < 10) {
    console.log(`Iteration number: ${i}`);
    i++;
}

/**
 * For
 * 
 */
for (let j = 0; j < 5; j++) {
    console.log(`Iteration number: ${j}`);
}

/**
 * For ...of
 * 
 */
let fruits = ['mango', 'papayas', 'apple', 'banana'];
for (let fruit of fruits) {
    console.log(fruit);
}

/**
 * .forEach()
 * 
 */
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

/**
 * .map()
 * 
 */