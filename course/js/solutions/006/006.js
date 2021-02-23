fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
    .then(response => response.json())
    .then(users => {
        users.forEach((user) => {
            let userDOM = document.createElement('li');  // <li>
            userDOM.innerText = user.name;
            document.getElementById('users').appendChild(userDOM); 
        });
    })
    .catch(err => console.log(err));;

