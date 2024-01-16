const express = require('express'); //bring express
const app = express(); // central part of the server
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// app.listen(3000); //running the listener alone wont do anything, because it won't send anything back
app.set('view engine', 'pug'); //set the template engine to pug
//app.set method sets different settings in express
//by default express is looking for a folder named 'views' on the root of project

app.get('/', (req, res) => {
    res.send('<h1>Oh Express</h1>');
});
app.get('/hello', (req, res) => {
    //     res.send('<h1>Oh Hello Hello</h1>');
    res.render('hello');
});
app.post('/hello', (req, res) => {
    //     console.log(req.body);
    //     res.json(req.body);
    res.render('hello', { name: req.body.username });
});

app.get('/pug', (req, res) => {
    res.render('index'); //response.render will look inside the views folder and we dont need to put pug extention, only the view name
});
app.get('/card', (req, res) => {
    //we can pass variables(locals) in an object
    res.render('card', {
        prompt: 'Who is buried in Grants tomb?',
        hint: 'Think about whose tomb it is',
        //   colors,
    });
    //     OR
    //we can use res.locals.prompt to pass in the variables
    //     res.locals.prompt = 'Who is buried there again?';
    //     res.render('card');
});
app.get('/sandbox', (req, res) => {});

app.listen(4000, () => {
    console.log('The server is running on localhost:4000');
});
