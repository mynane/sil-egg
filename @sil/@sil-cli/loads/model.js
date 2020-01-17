const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

module.exports = context => {
  const p = path.join(cwd, "/app/model");
  const files = fs.readdirSync(p);
  for (let item of files) {
    const Modlue = require(`${p}/${item}`);
    const { name, model } = Modlue(context);
    context.model[name] = model;
  }
};
