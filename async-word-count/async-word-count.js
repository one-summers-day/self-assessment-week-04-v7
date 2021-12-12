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

  //get total word from path one and two
  getWordCount(filePathOne, (error, firstCount) => { //get firstCount
    if (error) {
      callback(error, null);
      return;
    } //now my firstCount is the result from pathOne

    // console.log('>>>>>>' + firstCount)
    getWordCount(filePathTwo, (error, secondCount) => {
      if (error) {
        callback(error, null);
        return;
      } //now secondCount is result from pathTwo
      // console.log('>>>>>>>>>' + secondCount)
      // console.log((secondCount +  firstCount));
      callback(null, firstCount + secondCount); //add up both result

    })
  });
};
// getTotalWordCount('./files/fileOne.txt', './files/fileTwo.txt', (a, result)=>{ console.log('this is result: ', result)})
module.exports = getTotalWordCount;
