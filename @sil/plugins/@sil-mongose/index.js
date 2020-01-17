const mongoose = require("mongoose");
const assert = require("assert");

const model = mongoose.model;

mongoose.model = function(name, ...props) {
  return {
    name,
    model: model(name, ...props)
  };
};

function SilMongose(config) {
  if (!(this instanceof SilMongose)) {
    return new SilMongose(config);
  }
  this.init(config);
  return mongoose;
}

SilMongose.prototype = {
  constructor: SilMongose,
  init: async function(config) {
    assert(config, "config is require!");
    await mongoose.connect(config.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
};

module.exports = SilMongose;
