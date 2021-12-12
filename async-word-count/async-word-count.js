var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    //console.log(wordCount);
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  getWordCount(filePathOne, (err, wordCount) => {
    if (err) {
      callback(err);
    } else {
      // newWordCount = wordCount;
      getWordCount(filePathTwo, (err, firstFileWordCount) => {
        if (err) {
          callback(err);
        } else {
          callback(null, wordCount + firstFileWordCount);
        }
      })
    }
  })
};
//getTotalWordCount('async-word-count/files/fileOne.txt', 'async-word-count/files/fileTwo.txt', console.log) // need to pass down first word count
//getWordCount('async-word-count/files/fileOne.txt', console.log) returns 79
module.exports = getTotalWordCount;
