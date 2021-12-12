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
  getWordCount(filePathOne, function(err, resultsOne) {
    if (err) {
      callback(err, null);
      return;
    }
    let wordCountOne = resultsOne;
    getWordCount(filePathTwo, function(err, resultsTwo) {
      if (err) {
        callback(err, null);
        return;
      }
      let wordCountTwo = resultsTwo
      callback(null, wordCountOne + wordCountTwo)
    })
  });
};

//tests
var pathOne = 'async-word-count/files/fileOne.txt'
var pathTwo = 'async-word-count/files/fileTwo.txt'
getWordCount(pathOne, (err, results) => {
  if (err) {
    console.log(err)
  }

  console.log(results); //expect 79
});

getWordCount(pathTwo, (err, results) => {
  if (err) {
    console.log(err)
  }

  console.log(results); //expect 58
});


getTotalWordCount(pathOne, pathTwo, (err, results) => {
  if (err) {
    console.log(err)
  }
  console.log(results); //expect 137
});

module.exports = getTotalWordCount;
