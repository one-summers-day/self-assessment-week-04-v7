var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    // console.log('trimmed and split',data.trim().split(' '));
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  getWordCount(filePathOne, (err, wordCount)=>{
    if (err) {
      console.log('err on filePathOne', err)
    } else {
      var wordCount1 = wordCount;
      getWordCount(filePathTwo, (err, WordCount)=>{
        if (err){
          console.log('err on filePathTwo', err)
        } else {
          // console.log('wordCount1', wordCount1)
          // console.log('WordCount2', WordCount)
          // console.log('WordCounttotal', wordCount1 + WordCount)
          callback(err, wordCount1 + WordCount)
          //do i really need the err here? :/
        }
      })
    }
  })
  // YOUR CODE HERE
};

// var callback = (err, arguments)=>{console.log(arguments)}
var filePathOne = __dirname + '/./files/fileOne.txt';
var filePathTwo = __dirname + '/./files/fileTwo.txt';
// console.log(getTotalWordCount(filePathOne, filePathTwo, callback))
module.exports = getTotalWordCount;
