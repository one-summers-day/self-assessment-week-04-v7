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
  getWordCount (filePathOne, (err, data1) => {
    if (err) {
      throw ('error reading: ', filePathOne);
    } else {
      getWordCount (filePathTwo, (err, data2) => {
        if (err) {
          throw ('error reading: ', filePathTwo);
        } else {
          callback(null, data1 + data2);
        }
      });
    }
  })


};

module.exports = getTotalWordCount;
