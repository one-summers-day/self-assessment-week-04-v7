var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }
    //split sentences into words, omitting white space
    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  //get into the first file, callback with wordCount from first file
  getWordCount(filePathOne, (err,firsWordCount) => {
    //get into the second file, callback with wordCount from second file
    getWordCount(filePathTwo, (err,secondWordCount) => {
      //combine both
      callback(err, firsWordCount + secondWordCount)
    });
  })
};

module.exports = getTotalWordCount;
