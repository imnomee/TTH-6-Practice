const express = require('express'); //bring express
const app = express(); // central part of the server

// app.listen(3000); //running the listener alone wont do anything, because it won't send anything back

app.get('/', (req, res) => {
    res.send('<h1>Oh Express</h1>');
});
app.get('/hello', (req, res) => {
    res.send('<h1>Oh Hello Hello</h1>');
});

app.listen(4000, () => {
    console.log('The server is running on localhost:4000');
});
