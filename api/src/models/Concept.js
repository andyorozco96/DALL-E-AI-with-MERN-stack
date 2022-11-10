const { Schema, model } = require("mongoose");

class ConceptModel {
  constructor() {
    const schema = new Schema(
      {
        title: { type: String, required: true },
        img: { type: String, required: true },
        deleted: { type: Boolean, default: false },
      },
      { versionKey: false }
    );

    this.model = model("concept", schema);
  }

  async save(obj) {
    const result = await this.model.create(obj);
    return result;
  }

  async getAll() {
    const result = await this.model.find({}).lean();
    return result;
  }
}

module.exports = new ConceptModel();
