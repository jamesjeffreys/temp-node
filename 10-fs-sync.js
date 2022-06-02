const fs = require('fs')

// is used to read the file and return its content. 
const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

//Creates new file if the specified file does not exist. Also the ‘readline-sync’ module is used to enable user input at runtime.

fs.writeFileSync('./content/third.txt', `Here is the result: ${first}, ${second} bahahah`)
