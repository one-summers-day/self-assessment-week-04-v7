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
  // YOUR CODE HERE
  var total_count = 0;
  getWordCount(filePathOne, (err, count) => {
    if (err){
      callback(err);
    } else {
      callback(null, total_count += count);
      getWordCount(filePathTwo, (err, count) => {
        if (err) {
          callback(err);
        } else {
          callback(null, total_count += count);
        }})
      }
    })
};

module.exports = getTotalWordCount;

