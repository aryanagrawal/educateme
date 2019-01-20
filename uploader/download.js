var AwsS3 = require ('aws-sdk/clients/s3');v
const s3 = new AwsS3 ({
  accessKeyId: 'AKIAI3ZS5UCAMZ2PPVRA',
  secretAccessKey: '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',
});

const listDirectories = params => {
  return new Promise ((resolve, reject) => {
    const s3params = {
      Bucket: 'hackariz19',
      MaxKeys: 20,
      Delimiter: '/',
    };
    s3.listObjectsV2 (s3params, (err, data) => {
      if (err) {
        reject (err);
      }
      resolve (data);
    });
  });
};

console.log(listDirectories());



'use strict';

var aws = require('aws-sdk'); //require aws-sdk

var config = require('../../config/environment/' + process.env.NODE_ENV); // require you config file

var s3 = new aws.S3({ accessKeyId: AKIAI3ZS5UCAMZ2PPVRA, secretAccessKey: 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 }); //create a s3 Object with s3 User ID and Key

//construct getParam
var getParams = {
    Bucket: 'hackariz19',
    Key: 'math/'
}

//Fetch or read data from aws s3
s3.getObject(getParams, function (err, data) {

    if (err) {
        console.log(err);
    } else {
        console.log(data.Body.toString()); //this will log data to console
    }

})
