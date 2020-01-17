"use strict";

/** @type Egg.EggPlugin */
const path = require("path");
module.exports = {
  mongoose: {
    enable: true,
    package: require("../@sil/plugins/@sil-mongose")
  }
};
