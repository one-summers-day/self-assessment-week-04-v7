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
  getWordCount(filePathOne, (err, wordCount) => {
    if (err) {
      console.error('Error getting first word count ', err);
    } else {
      let firstWordCount = wordCount;
      getWordCount(filePathTwo, (err, wordCount) => {
        if (err) {
          console.error('Error getting second word count ', err);
        } else {
          callback(null, wordCount + firstWordCount);
        }
      });
    }
  });
};

module.exports = getTotalWordCount;

// getTotalWordCount('/home/brian/hackreactor/hr-sfo139-self-assessment-week-04-v7/async-word-count/files/fileOne.txt', '/home/brian/hackreactor/hr-sfo139-self-assessment-week-04-v7/async-word-count/files/fileTwo.txt', console.log);
