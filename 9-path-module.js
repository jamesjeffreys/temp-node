const path = require('path')

//Provides the platform-specific path segment separator
console.log(path.sep);

//joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
const filePath = path.join('/content', 'subcontent', 'test.txt')
console.log(filePath);

//method returns the last portion of a path, similar to the Unix basename command

const fileBase = path.basename(filePath)

console.log(fileBase);

//method resolves a sequence of paths or path segments into an absolute path.

const absolute = path.resolve(__dirname, 'content', 'subcontent', 'test.txt')

console.log(absolute);