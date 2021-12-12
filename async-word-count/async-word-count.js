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
  var totalWordCount = 0;
  getWordCount(filePathOne, function(err, wordCount1) {
    if (err) {
      callback(err, null);
    } else {
      totalWordCount += wordCount1;
      getWordCount(filePathTwo, function (err, wordCount2) {
        if (err) {
          callback (err, null);
        } else {
          totalWordCount += wordCount2;
          callback(null, totalWordCount);
        }
      })
    }
  })
};

module.exports = getTotalWordCount;
