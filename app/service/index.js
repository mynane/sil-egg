const Service = require("../../@sil/@sil-core").Service;

class IndexService extends Service {
  async home() {
    const { cxt } = this;
    const emails = await cxt.model.Email2.find({});
    return {
      code: 200,
      data: emails
    };
  }
  async post(email) {
    const { cxt } = this;
    return await new cxt.model.Email2(email).save();
  }
}

module.exports = IndexService;
