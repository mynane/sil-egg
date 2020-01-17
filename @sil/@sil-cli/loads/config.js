const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

module.exports = context => {
  const configs = require(path.join(cwd, "/config/config.default"));
  context.configs = configs(context);
};
