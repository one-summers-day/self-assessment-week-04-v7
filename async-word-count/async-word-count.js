var fs = require('fs');
var path = require('path');

var getWordCount = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

//I had some issues with debugging here


var getTotalWordCount = function (filePathOne, filePathTwo, callback) {
  getWordCount(filePathOne, (err, filePathOneCallback) => {
    if (err) {
      callback(err, null); //callback(err, null) or just callback(err) ???
    } else {
      getWordCount(filePathTwo, (err, filePathTwoCallback) => {
        if (err) {
          callback(err, null);
        } else {
          var totalWordCount = filePathOneCallback + filePathTwoCallback;
          //Should I do callback(null, totalWordCount)??Can I return totalWordCount?
          callback(null, totalWordCount);
        }
      })
    }
  })
};

module.exports = getTotalWordCount;
