var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  var wordCountOne = 0;
  var wordCountTwo = 0;

  fs.readFile(filePathOne, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    wordCountOne = data.trim().split(' ').length;
  });

  fs.readFile(filePathTwo, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    wordCountTwo = data.trim().split(' ').length;
  });

  callback(null, (wordCountOne + wordCountTwo));
};

module.exports = getTotalWordCount;
