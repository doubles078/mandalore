#! /usr/bin/env node
// call the packages we need

const theme = require("./src/tokens");
const fs = require("fs");
const dist = `${process.cwd()}/dist/`;

let sassFile = "";

const makeSassVariables = (object, parent) => {
  for (let variable in object) {
    if (typeof object[variable] === "string") {
      if (parent) {
        const parentStrings = parent.reduce((allParents, parent) => {
          return (allParents += `${parent}-`);
        }, "");
        sassFile += `$${parentStrings}${variable}: ${
          object[variable]
        } !default;\n`;
      } else {
        sassFile += `$${variable}: ${object[variable]} !default;\n`;
      }
    } else if (typeof object[variable] === "object") {
      makeSassVariables(
        object[variable],
        parent ? [...parent, variable] : [variable]
      );
    }
  }
};

makeSassVariables(theme);

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

fs.writeFile(`${process.cwd()}/dist/design-tokens.scss`, sassFile, err => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log(`Saved sass variables file.`);
});

function copyFile(source, target, cb) {
  var cbCalled = false;

  var rd = fs.createReadStream(source);
  rd.on("error", function(err) {
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on("error", function(err) {
    done(err);
  });
  wr.on("close", function(ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

copyFile(
  `${process.cwd()}/src/tokens.js`,
  `${process.cwd()}/dist/design-tokens.js`,
  () => console.log("copied js file to dist")
);
