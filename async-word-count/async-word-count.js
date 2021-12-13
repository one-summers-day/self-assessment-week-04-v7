var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {

  //reads file and get wordcount, then invokes callback topass wordCount
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
  getWordCount(filePathOne, (err, data) => {
    if (err) {
      callback('Error :', err);
    } else {
      let wordCount = data;
      getWordCount(filePathTwo, (err, dataTwo) => {
        if (err) {
          callback('Error :', err);
        } else {
          let total = wordCount + dataTwo;
          callback(null, total);
        }
      })
    }
  })
};

module.exports = getTotalWordCount;
