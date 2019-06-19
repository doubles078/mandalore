#! /usr/bin/env node
// call the packages we need
const glob = require("glob");
const fs = require("fs");

// options is optional
glob("**/*.tsx", function(er, files) {
  let index = "";
  files.forEach(file => {
    const noSrc = file.replace("src/", "").replace(".tsx", "");
    const icon = noSrc.split("/")[2];
    index += `export { Svg${icon} } from "./${noSrc}";\n`;
  });
  fs.writeFile(`${process.cwd()}/src/index.ts`, index, err => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log(`Saved index file.`);
  });
});
