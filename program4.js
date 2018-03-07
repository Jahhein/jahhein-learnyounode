var fs = require("fs");

var input = fs.readFile(process.argv[2], "utf8", function(err, data) {
  if (err) throw err;
  return fileoutput(data);
});

function fileoutput(data) {
  var inputLines = data.split("\n").length - 1;
  console.log(inputLines);
}


// official
var fs = require("fs");
var file = process.argv[2];

fs.readFile(file, function(err, contents) {
  if (err) {
    return console.log(err);
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split("\n").length - 1;
  console.log(lines);
});
