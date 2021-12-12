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

// `getTotalWordCount` should pass the combined word count of the files located at `filePathOne` and `filePathTwo` to the `callback`
var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // call the getWordCount function and pass the location filePath and a callback func
  getWordCount(__dirname + filePathOne, function(err, wordCount1) {
    // in the case are error
    if (err) {
      console.log(err);
    } else {
      getWordCount(__dirname + filePathTwo, function(err, wordCount2) {
        if (err) {
          console.log(err);
        } else {
          callback(null, wordCount1 + wordCount2);
        }
      });
    }
  });
};


// test
getTotalWordCount('/files/fileOne.txt','/files/fileTwo.txt', (err, res) => {
  console.log(res); // total word --> 137
});

module.exports = getTotalWordCount;
