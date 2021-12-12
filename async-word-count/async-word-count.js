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
  getWordCount(filePathOne, (err, wordCount1) => {
    if (err) {
      console.log('error in filePathOne', err);
    } else {
      getWordCount(filePathTwo, (err, wordCount2) => {
        if (err) {
          console.log('error in filePathTwo', err);
        } else {
          callback(null, wordCount1 + wordCount2);
        }
      });
    }
  });
};

// getTotalWordCount('/Users/yr/hackreactor/self-assessment/hr-sfo139-self-assessment-week-04-v7/async-word-count/files/fileOne.txt', '/Users/yr/hackreactor/self-assessment/hr-sfo139-self-assessment-week-04-v7/async-word-count/files/fileTwo.txt', console.log);

module.exports = getTotalWordCount;
