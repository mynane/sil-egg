// "use strict";

module.exports = app => {
  const { router, controller } = app;

  router.get("/", controller.index.home);
  router.post("/", controller.index.post);
};
