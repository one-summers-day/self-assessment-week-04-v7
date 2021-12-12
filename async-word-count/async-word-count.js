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
  getTotalWordCount(filePathOne, (err, wordCountOne) => {
    if(err) {
      console.log(err);
    } else {
      getTotalWordCount(filePathTwo, (err, wordCountTwo) =>{
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          let wordCountSum = wordCountOne + wordCountTwo
          callback(null, wordCountSum);
        }
      })
    }

  })
};

module.exports = getTotalWordCount;
