const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

module.exports = context => {
  const plugins = require(path.join(cwd, "/config/plugin"));
  for (let key of Object.keys(plugins)) {
    const config = context.configs[key];
    if (plugins[key].enable) {
      context[key] = plugins[key].package(config);
    }
  }
  context.plugins = plugins;
};
