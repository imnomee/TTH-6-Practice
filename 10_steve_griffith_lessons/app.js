const express = require('express');
const app = express();
const http = require('http');

app.get('/', (req, res) => {
    //handle route: get requests for '/'
    //     res.send('<h1>Content</h1>'); //Express looks at content to figure out type automatically
    //     res.end(); // to type headers set
    res.sendFile(
        'C:Users\nomanDocumentsGithubTTH-6-Practice8_static_files_practicepublicimagescinnamon_roll.jpg',
        (err) => {
            console.log(err);
        }
    ); //
    //     res.json(); // set type to application.json
    //     res.redirect(301, '/other');
    res.format({
        'text/plain': () => res.send('just some words'),
        'text/html': () => res.send('<h1>Here be HTML</h1>'),
    });
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
