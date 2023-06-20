const fs = require("fs");

const files = fs.readdirSync("./challenges");

files
  // Filter out non-js files (.DS_Store in macOS for example)
  .filter((file) => file.indexOf(".js") !== -1)
  // Construct exports from JS files
  .forEach((file) => {
    const challenge = file.replace(".js", "");
    module.exports[challenge] = require("./challenges/" + file);
  });
