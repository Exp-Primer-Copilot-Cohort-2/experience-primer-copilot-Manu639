// Create web server
// npm install express
// npm install body-parser
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Array to store comments
var comments = [];

// Add comment to array
app.post('/comments', function (req, res) {
    comments.push(req.body.comment);
    res.send('Comment added');
});

// Get all comments
app.get('/comments', function (req, res) {
    res.send(comments);
});

// Get comment by id
app.get('/comments/:id', function (req, res) {
    res.send(comments[req.params.id]);
});

// Update comment by id
app.put('/comments/:id', function (req, res) {
    comments[req.params.id] = req.body.comment;
    res.send('Comment updated');
});

// Delete comment by id
app.delete('/comments/:id', function (req, res) {
    comments.splice(req.params.id, 1);
    res.send('Comment deleted');
});

app.listen(port, function () {
    console.log('Server running at http://localhost:' + port);
});