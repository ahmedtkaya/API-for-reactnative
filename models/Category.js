const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: false,
  },
  slug: {
    type: String,
    unique: true,
  },
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
});
CategorySchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    // burada slug ile name'i eşitliyor
    lower: true,
    strict: true, //name'de gereksiz karakterleri siler (- :) gibi
  });
  next();
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
