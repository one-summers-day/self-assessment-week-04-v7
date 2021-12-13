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
  var myLittleArray = [];
  var myLittleCallBack = function(...myLittleArguments) {
    myLittleArray.push(myLittleArguments[1])
  }

  getWordCount(filePathOne, myLittleCallBack);
  if (myLittleArray.includes(null)){
    throw new Error('Yikes! There was an error in attaining the word count for filePathOne :(');
    return;
  }

  getWordCount(filePathTwo, myLittleCallBack);
  if (myLittleArray.includes(null)){
    throw new Error('Yikes! There was an error in attaining the word count for filePathTwo :(');
    return;
  };

  callback(myLittleArray[0] + myLittleArray[1])
};

module.exports = getTotalWordCount;
