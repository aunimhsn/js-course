// alert('Hello World!');
// console.log('Hello World!');

console.log(document.getElementById('card'));
console.log(document.querySelector('#card'));

let button = document.getElementById('button');
let firstName = document.getElementById('firstName');
button.addEventListener('click', function() {
    alert('Bonjour ' +  firstName.value + '!');
});