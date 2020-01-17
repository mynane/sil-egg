module.exports = appInfo => {
  return {
    middleware: ["checked", "demo"],
    mongoose: {
      url: "mongodb://localhost:27017/gigs",
      options: {}
    }
  };
};
