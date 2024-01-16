const express = require('express'); //bring express
const app = express(); // central part of the server
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('view engine', 'pug'); //set the template engine to pug

app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) res.render('index', { name });
    else res.redirect('/hello');
});

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});
app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

app.get('/sandbox', (req, res) => {});

app.listen(4000, () => {
    console.log('The server is running on localhost:4000');
});
