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
  // read from both filePathOne and fliePathTwo
  // add up both their word counts
  // set up variables containing each word count
  // return the sum of each word count

  let flieOneWordCount = getWordCount(filePathOne, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, data);
    }
  });

  let fileTwoWordCount = getWordCount(filePathTwo, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, data);
    }
  });

  return flieOneWordCount + fileTwoWordCount;

};

module.exports = getTotalWordCount;
