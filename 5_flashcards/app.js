const express = require('express'); //bring express
const app = express(); // central part of the server
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'pug'); //set the template engine to pug

const mainRoutes = require('./routes/index.js');
const cardRoutes = require('./routes/cards.js');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

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
