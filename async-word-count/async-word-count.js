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
  getWordCount(filePathOne, (error, fileData1) => {
    error ?
      console.log(error) :
      getWordCount(filePathTwo, (error, filedData2) => {
        error ?
          console.log(error) :
          callback(null, fileData1 + filedData2);
      })
  })
};

// getWordCount('./files/fileOne.txt', (error, data) => {
//   console.log(data);
// });

// getWordCount('./files/fileTwo.txt', (error, data) => {
//   console.log(data);
// });

// getTotalWordCount('./files/fileOne.txt', './files/fileTwo.txt', (error, data) => {
//   console.log(data);
// });

module.exports = getTotalWordCount;
