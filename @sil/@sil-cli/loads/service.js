const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

module.exports = context => {
  const p = path.join(cwd, "/app/service");
  const files = fs.readdirSync(p);
  for (let item of files) {
    const Modlue = require(`${p}/${item}`);
    const temp = item.split(".");
    context.service[temp[0]] = Modlue;
  }
};
