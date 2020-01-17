const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

module.exports = function(context) {
  const p = path.join(cwd, "/app/controller");
  const files = fs.readdirSync(p);
  for (let item of files) {
    const Modlue = require(`${p}/${item}`);
    const temp = item.split(".");
    const proxy = new Proxy(Modlue, {
      get: function(target, property, receiver) {
        return async function(cxt, next) {
          const service = context.service;
          await next();
          var temp = {
            ...service
          };
          const proxyTemp = new Proxy(temp, {
            get(target, property, receiver) {
              const Fn = service[property];
              target[property] = new Fn(cxt);
              return target[property];
            },
            set(target, property, value, receiver) {
              target[property] = value;
            }
          });
          cxt.model = context.model;
          cxt.service = proxyTemp;
          return new target(cxt)[property]();
        };
      }
    });

    context.controller[temp[0]] = proxy;
  }
};
