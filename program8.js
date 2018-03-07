var http = require("http");
var bufferlist = require("bl");
var concat = require('concat-stream')

http.get(process.argv[2], function(response) {
  response.pipe(
    bufferlist(function(err, data) {
      if (err) return console.error(err);
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
