var fs = require("fs");
var path = require("path");

module.exports = function(arg,filterString,callback) {
  fs.readdir(arg, function(err, list) {
    if (err) return callback(err)

    list= list.filter(function(file) {
      return path.extname(file) === "." + filterString
    })

  callback(null,list)
  })
}
