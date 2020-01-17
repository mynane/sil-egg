module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const schema = new Schema({
    email: String
  });

  return mongoose.model("Email2", schema);
};
