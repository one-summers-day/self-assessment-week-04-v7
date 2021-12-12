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
  // console.log('THIS IS A TEST!!!');

  // input: 2 file paths which are strings and callback function
  // output: a number representing the total word count of the 2 files

  // we need to get word count from filePathOne
    // invoke the getWordCount function
    getWordCount(filePathOne, (error, wordCountOne) => {
      if (error) {
        // output nothing if error
        callback(error, null);
        // stop the function
        return;
      }
      // invoke the getWordCount function
      // we need to get word count from filePathTwo
      getWordCount(filePathTwo, (error, wordCountTwo) => {
        if (error) {
          callback(error, null);
          return;
        }
        // add up the two word counts
        var totalWordCount = wordCountOne + wordCountTwo;
        // output the data.
        console.log(totalWordCount);
        callback(null, totalWordCount);
      });
    })
};

// Testing----------------------
// getTotalWordCount('./files/fileOne.txt', './files/fileTwo.txt', (error, wordCount) => {
//   if (error) {
//     console.log('something is wrong');
//   } else {
//     return wordCount;
//   }
// });

module.exports = getTotalWordCount;
