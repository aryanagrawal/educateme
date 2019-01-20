var AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: "AKIAI3ZS5UCAMZ2PPVRA",
    secretAccessKey: "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",
    "region": "sa-east-1"
});

var s3 = new AWS.S3();
var params = {
    Bucket: 'makersquest',
    Key: 'mykey.txt',
    Body: "HelloWorld"
};
s3.putObject(params, function (err, res) {
    if (err) {
        console.log("Error uploading data: ", err);
    } else {
        console.log("Successfully uploaded data to myBucket/myKey");
    }
});
