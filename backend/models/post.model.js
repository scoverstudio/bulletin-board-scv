const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  authorEmail: { type: String, required: true },
  publishDate: { type: String },
  latestUpdate: { type: String },
  status: { type: String, required: true },
  title: { type: String, minlength: 3, maxlength: 10, required: true },
  content: { type: String, minlength: 20, maxlength: 100, required: true },
  image: { type: String },
  imageDescription: { type: String },
  price: { type: Number },
  phone: { type: String },
  localization: { type: String },
});

module.exports = mongoose.model("Post", postSchema);
