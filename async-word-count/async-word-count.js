/*
## Async word count

Inside `async-word-count.js`, complete `getTotalWordCount`. `getTotalWordCount` should pass the combined word count of the files located at `filePathOne` and `filePathTwo` to the `callback` following proper node style convention

- [ ] Be sure to handle errors at each step
- [ ] Do not use promises

### Available Resources for this Prompt

* MDN
* Node docs

*/

var fs = require('fs');
var path = require('path');
const fileOne = 'files/fileOne.txt'
const fileTwo = 'files/fileTwo.txt'


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
  // will get the word count of file one
  getWordCount(filePathOne, (err, count1) => {
    if (err) {
      callback(err)
    } else {
      // will get the word count of file two
      getWordCount(filePathTwo, (err, count2) => {
        if (err) {
          callback(err)
        } else {
          const totalCount = count1 + count2;
          callback(null, totalCount)
        }
      })
    }
  })

};

// getTotalWordCount(fileOne, fileTwo,(err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//     console.log('success') // should equal 137
//   }
// })
module.exports = getTotalWordCount;

