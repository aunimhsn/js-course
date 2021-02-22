/**
 * .fetch() ES6
 *  
 * Fetch a Kanye West's quote
 * https://api.kanye.rest
 * 
 */
fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

