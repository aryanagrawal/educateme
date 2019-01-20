var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res, next){
    res.send('You did not say the magic word');
});


app.get('/s3Proxy', function(req, res, next){
    // download the file via aws s3 here
    var fileKey = req.query['fileKey'];

    console.log('Trying to download file', fileKey);
    var AWS = require('aws-sdk');
    AWS.config.update(
      {
        accessKeyId: "AKIAI3ZS5UCAMZ2PPVRA",
        secretAccessKey: "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",
      }
    );
    var s3 = new AWS.S3();
    var options = {
        Bucket    : '/math',
        Key    : fileKey,
    };

    res.attachment(fileKey);
    var fileStream = s3.getObject(options).createReadStream();
    fileStream.pipe(res);
});
