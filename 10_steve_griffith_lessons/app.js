const express = require('express');
const app = express();
const http = require('http');

app.get('/', (req, res) => {
    //handle route: get requests for '/'
    //     res.send('<h1>Content</h1>'); //Express looks at content to figure out type automatically
    //     res.end(); // to type headers set
    //     res.json(); // set type to application.json
    //     res.redirect(301, '/other'); //redirect to a different page with status code
    //     res.format({
    //         'text/plain': () => res.send('just some words'),
    //         'text/html': () => res.send('<h1>Here be HTML</h1>'),
    //         'application/json': () =>
    //             res.send({ message: 'This is a JSON response' }),
    //         'text/xml': () => res.send('<?xml version="1.0">'),
    //         default: () => res.status(406).send('Not Acceptable'), //any other types I don't have
    //     });
    //     res.links({
    //         first: 'http://localhost:3000/?page=1',
    //         prev: 'http://localhost:3000/?page=2',
    //         next: 'http://localhost:3000/?page=4',
    //         last: 'http://localhost:3000/?page=9',
    //         canonical: 'http://localhost:3000/page=3',
    //         prefetch: 'http://localhost:3000/something.png',
    //         preload: 'http://localhost:3000/something-else.png',
    //     });
    //     let locals = { name: 'Noms' };
    //     res.render('myPugview', locals, (err, html) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         } else {
    //             console.log(html);
    //             res.send(html);
    //         }
    //     });
    //     res.set('Content-Type', 'text/html'); //set any headers as the first res.set and res.append both work together
    //     res.append('Access-Control-Allow-Origin', '*'); // set headers after the first one
    //     res.cookie('name', 'Nomee', {
    //         domain: '.example.com',
    //         path: '/',
    //         secure: true,
    //         maxAge: 2592000000, //expiry of the cookie in miliseconds
    //     });
    //     res.status(404).end();
    //     res.type('application/json'); //sets the content-type header
    //     res.sendFile('../cinnamon_roll.jpg', (err) => {
    //         console.log(err);
    //     });
    //     res.attachment('/path/to/filename.png'); //sets Content-Disposition header
    res.download(
        './cinnamon_roll.jpg',
        'filename.png',
        (
            err //Trigger the save diaglog, start the download and save the file
        ) => console.log(err)
    );
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
