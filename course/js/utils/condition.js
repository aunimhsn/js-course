let person = { username: 'john.doe' }
let bankAccount = 90;

// If
if (bankAccount < 100) {
    person.state = 'poor';
} else {
    person.state = 'rich';
}

// Ternary
person.state = (bankAccount < 100) ? 'poor' : 'rich';

console.log(person.state); // poor

// Switch
const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}


