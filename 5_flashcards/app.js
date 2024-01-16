const express = require('express'); //bring express
const app = express(); // central part of the server
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('view engine', 'pug'); //set the template engine to pug

//MIDDLEWARES
app.use((req, res, next) => {
    req.message = 'This message made it from middleware one!';
    const err = new Error('Oh noes!');
    err.status = 500;
    next();
});

app.use((req, res, next) => {
    console.log(req.message);
    next();
});
//Error Middleware
(err, req, res, next) => {};

/////////////////////////////
app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('/hello');
    }
});

app.get('/hello', (req, res) => {
    if (req.cookies.username) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});
app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err.status);
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});
app.listen(4000, () => {
    console.log('The server is running on localhost:4000');
});
