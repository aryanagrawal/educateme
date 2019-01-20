const fs = require('fs');
const express = require('express');
const app = express();
const data = require('./dataset');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: 'AKIAI3ZS5UCAMZ2PPVRA',
    secretAccessKey: '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'
});

const url = 'http://localhost:3000';

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    // res.send('hello world');
    res.render('index');
});

app.get('/test', (req, res) => {
    res.render('test');
});

app.get('/:id', (req, res) => {
    res.render('index', {
        user: data[req.params.id],
        id: req.params.id
    });
});

app.get('/:id/:cat', (req, res) => {
    var user = data[req.params.id];
    var cat = req.params.cat;
    console.log(user);
    var score = user[cat];
    res.render('cat', {
        url: url,
        cat: cat,
        id: req.params.id,
    });
});



app.listen(3000, () => {
    console.log('listening form port 3000');
});