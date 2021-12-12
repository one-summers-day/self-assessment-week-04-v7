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
  (error, () => {
    if error {
      callback (error)
    }
    callback(null, filePathOne, filePathTwo)
  })
  //put filepath 1 into gwc
  //put file 2 into gwc
  //error first callback
};

module.exports = getTotalWordCount;
