const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

module.exports = context => {
  const router = require(path.join(cwd, "/app/router"));
  context.router = router;
};
