var moduleFilter = require("./program6b.js");
var args = process.argv[2];
var filtered = process.argv[3];

moduleFilter(args, filtered, function(err, list) {
  if (err) return console.error("Error:", err);

  list.forEach(function(file) {
    console.log(file);
  });

});
