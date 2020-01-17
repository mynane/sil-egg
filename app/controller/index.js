// "use strict";
const Controller = require("../../@sil/@sil-core").Controller;

class IndexController extends Controller {
  async home() {
    const { cxt } = this;
    const res = await cxt.service.index.home();
    cxt.body = res;
  }

  async post() {
    const { cxt } = this;
    const { body } = cxt.request;
    const res = await cxt.service.index.post(body);
    cxt.body = res;
  }
}

module.exports = IndexController;
