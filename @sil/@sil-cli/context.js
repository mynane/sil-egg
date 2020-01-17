const LoadController = require("./loads/constroller");
const LoadService = require("./loads/service");
const LoadModel = require("./loads/model");
const LoadPlugin = require("./loads/plugin");
const LoadConfig = require("./loads/config");
const LoadMiddleware = require("./loads/middleware");
const loadRouter = require("./loads/router");

class Context {
  constructor() {
    this.controller = {};
    this.service = {};
    this.model = {};
    this.middleware;
  }
  load() {
    // config、plugin
    LoadConfig(this);
    LoadPlugin(this);

    // service、controller、model
    LoadMiddleware(this);
    LoadService(this);
    LoadModel(this);
    LoadController(this);

    // router
    loadRouter(this);

    return this;
  }
}

module.exports = Context;
