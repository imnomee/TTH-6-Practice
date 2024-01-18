const express = require('express');
const app = express();
const http = require('http');

app.get('/', (req, res) => {
    let response = '<h1>Start from here</h1>';
    response += `<h2>Header Details: ${req.header}`;
    response += `<h2>URL Details: ${req.url}`;
    response += `<h2>IP Details: ${req.ip}`;
    response += `<h2>Method Details: ${req.method}`;
    response += `<h2>Protocol Details: ${req.protocol}`;
    response += `<h2>Path Details: ${req.path}`;
    response += `<h2>Query Details: ${req.query}`;
    response += `<h2>Params Details: ${req.params}`;
    response += `<h2>Subdomains Details: ${req.subdomains}`;
    response += `<h2>Hostname Details: ${req.hostname}`;
    response += `<h2>Body Details: ${req.body}`; //to get the body details we might have to parse the data.
    response += '<h2><a href="/methods">Methods</a></h2>';
    response += '<h2><a href="/codes">Status Codes</a></h2>';
    return res.send(response);
});
app.get('/old', (req, res) => {
    return res.redirect(301, '/new'); //redirect to new page with status code
});
app.get('/new', (req, res) => {
    return res.send('<h2>Welcome to New page redirected from Old page</h2>');
});
//List of Methods
app.get('/methods', (req, res) => {
    const methods = 'HTTP Methods: ' + http.METHODS.join(', ');
    return res.send(methods);
});

//List of status codes
app.get('/codes', (req, res) => {
    return res.send(http.STATUS_CODES);
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

// Regular Methods: get, post, patch, put, delete, head, options
