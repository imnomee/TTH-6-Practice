const express = require('express');
const app = express();
const http = require('http');
const data = require('./data');

app.use(express.json());

app.get('/api/channels', (req, res) => {
    //returns the list of channels
    // respond with a 200
    res.json(data);
    console.log('GET', data.channels);
});
app.get('/api/channels/:id', (req, res) => {
    //returns a specific channel
    // respond with a 200
    let obj = data.channels.find((item) => item.id === parseInt(req.params.id));
    res.json(obj);
    console.log('GET', obj);
});

app.post('/api/channels', (req, res) => {
    //add new channels then return new list
    // respond with a  201
    const { name } = req.body;
    let id =
        data.channels.reduce((prev, curr) => {
            return prev < curr.id ? curr.id : prev;
        }, 0) + 1;
    let last_update = Date.now();
    let obj = { id, name, last_update };
    data.channels.push(obj);
    res.status(201).json(obj);
    console.log('POST', data.channels);
});

app.put('/api/channels/:id', (req, res) => {
    //replace channel based on id
    //respond with 200 or 204
    //202 if the operation is async and still pending
    //similar to UPDATE but can also be used for Insert
    // or we can choose to create a new id and do an Insert if the id doesn't exist

    let id = parseInt(req.params.id);
    let name = req.body.name;
    let last_update = Date.now();
    let idx = data.channels.findIndex((item) => item.id === id);
    data.channels[idx].name = name;
    data.channels[idx].last_update = last_update;
    res.status(200).json(data.channels[idx]);
    console.log('PUT', data.channels);
});

app.patch('/api/channels/:id', (req, res) => {
    //edit a channel
    // respond with 200 or 204
    // 202 if action is still pending
    let id = req.params.id;
    let name = req.body.name;
    let last_update = Date.now();
    let idx = data.channels.findIndex((item) => item.id === id);
    data.channels[idx].name = name;
    data.channels[idx].last_update = last_update;
    res.status(200).json(obj);
    console.log('PATCH', data.channels);
});

app.delete('/api/channels/:id', (req, res) => {
    //delete a channel
    //200 or 204 status, 200 if pending
    console.log('DELETE', data.channels);
    let id = parseInt(req.params.id);
    data.channels = data.channels.filter((item) => item.id !== id);
    res.status(204).end();
    console.log('DELETE', data.channels);
});

app.head('/api/channels', (req, res) => {
    //returns only the headers just to see if the endpoint is functional
    res.status(200).end();
});

app.options('/api/channels', (req, res) => {
    res.status(200);
    res.set('Allow', 'GET', 'POST', 'PATCH', 'DELETE', 'PUT');
    res.set('Content-Length', '0');
    res.end();
});

/*
200: OK
201: created
202: accepted
*/

const port = 3000;
app.listen(port, (err) => {
    if (err) {
        console.log('Something went wrong', err);
        return;
    } else {
        console.log('Server is running on ' + port);
    }
});
