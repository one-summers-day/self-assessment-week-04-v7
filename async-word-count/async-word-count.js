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
  getWordCount(filePathOne, (error, countOne) => {
    if (error) {
      console.log('error');
    } else {
      let totalCount = countOne;
      getWordCount(filePathTwo, (error, countTwo) => {
        if (error) {
          console.log('error2');
        } else {
          totalCount += countTwo;
          console.log(totalCount);
        }
      })
    }
  })

};

module.exports = getTotalWordCount;

getTotalWordCount('./files/fileOne.txt', './files/fileTwo.txt', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});