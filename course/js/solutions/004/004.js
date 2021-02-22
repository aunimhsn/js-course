let target = document.getElementById('target');
let countButton = document.getElementById('countButton');
let result = document.getElementById('result');

countButton.addEventListener('click', () => { 
    result.innerText = (target.value.length) ?  `${target.value.split(' ').length} word(s)` : 'Input is empty!';
});
