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
  //use getWordCount to get filePathOne
  //every callback returns an error or data
  //use getWordCount to get filePathTwo
  //every callback returns an error or data
  //on the last callback, save the data from getWordCount1 & getWordCount2 and return the result
  // getWordCount(filePathOne, (err, count) => {
  //   if (err) {
  //     console.error(err)
  //   } else {
  //     var count1 = count;
  //     // console.log('count:', count)
  //   }
  //   getWordCount(filePathTwo, (err, count2) => {
  //     if (err) {
  //       console.error(err)
  //     } else {
  //       let results = count1 + count2
  //       console.log(results)
  //     }
  //   })
  // })
  getWordCount(filePathOne, (err, count) => {
    if (err) {
      callback(err, null)
    }
    getWordCount(filePathTwo, (err, count2) => {
      if (err) {
        callback(err, null)
      } else {
        let results = count + count2
        console.log(results)
        callback(null, results)
      }
    })
  })
};

module.exports = getTotalWordCount;

// console.log(getTotalWordCount('./files/fileOne.txt', './files/fileTwo.txt', callback))
