var ncp = require("ncp").ncp;
var path = require("path");

ncp.limit = 16;

ncp(
  path.resolve(__dirname, "src", "styles"),
  path.resolve(__dirname, "dist", "styles"),
  function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("done!");
  }
);
