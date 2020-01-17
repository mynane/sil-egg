const Router = require("koa-router");
const Koa = require("koa");
const koaBody = require("koa-body");
const Context = require("./context");
const router = Router();

class Application extends Koa {
  constructor() {
    super();
    this.init();
    return this;
  }
  init() {
    const context = new Context().load();

    context.router({
      router,
      controller: context.controller
    });

    this.use(
      koaBody({
        multipart: true,
        json: true,
        text: true
      })
    );
    this.use(context.middleware);
    this.use(router.routes());
    this.use(router.allowedMethods());
  }
}

module.exports = Application;
