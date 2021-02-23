	
fetch('https://api.kanye.rest', { method: 'POST', credentials: ''  })
    .then(response => response.json())
    .then(data => console.log(data));

// Http verbs
// GET
// POST
// PUT
// PATCH
// DELETE
