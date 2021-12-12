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
  //request both and add together
  console.log('running!');
  getWordCount(filePathOne, (err, count1) => {
    getWordCount(filePathTwo, (err, count2) => {
      callback(err, count1 + count2)
    });
  })
};

var f1 = "./files/fileOne.txt";
var f2 = "./files/fileTwo.txt";

getTotalWordCount(f1, f2, console.log);

module.exports = getTotalWordCount;
