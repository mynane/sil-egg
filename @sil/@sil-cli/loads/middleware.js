const fs = require("fs");
const path = require("path");
const compose = require("koa-compose");
const cwd = process.cwd();

module.exports = context => {
  const p = path.join(cwd, "/app/middleware");
  const files = fs.readdirSync(p);
  const middlewares = [];
  for (let file of files) {
    if (context.configs.middleware.includes(file.split(".")[0])) {
      const Modlue = require(`${p}/${file}`);
      middlewares.push(Modlue);
    }
  }

  const fn = compose(middlewares);

  context.middleware = async (cxt, next) => {
    return fn(cxt, next);
  };
};
