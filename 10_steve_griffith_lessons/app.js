const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const response = `
    <h1>req.url: ${req.url}</h1>`;
    return res.send(response);
});

app.get('/old', (req, res) => {
    return res.redirect(301, '/new');
});

app.get('/new', (req, res) => {
    return res.send('<h1>Welcome to New Page redirected from Old page');
});

const port = 3000;
app.listen(port, (err) => {
    if (err) {
        console.log('Something went wrong', err);
        return;
    } else {
        console.log('Server is running on ' + port);
    }
});

// Methods: get, post, patch, put, delete
