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
  let totalWordCount = 0;
  getWordCount(filePathOne, (err, results) => {
    if (err) {
      throw Error('Unable to read first file');
    } else {
      totalWordCount += results;
      getWordCount(filePathTwo, (err, results) => {
        if (err) {
          throw Error('Unable to read second file');
        } else {
          totalWordCount += results;
          callback(err, totalWordCount);
        }
      });
    }
  })
};

// console.log(getTotalWordCount('async-word-count/files/fileOne.txt', 'async-word-count/files/fileTwo.txt', (err, results) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results);
//   }
// }));

module.exports = getTotalWordCount;
