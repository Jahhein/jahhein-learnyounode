var fs = require('fs')

var input = fs.readFileSync(process.argv[2],'utf8')
var inputLines = input.split('\n').length - 1
console.log(inputLines)
