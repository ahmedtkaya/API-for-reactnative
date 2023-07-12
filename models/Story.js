const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const StorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  storyTR: {
    type: String,
    unique: false,
    required: true,
  },
  storyEN: {
    type: String,
    unique: false,
    required: true,
  },
  image: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
});
StorySchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    // burada slug ile name'i eşitliyor
    lower: true,
    strict: true, //name'de gereksiz karakterleri siler (- :) gibi
  });
  next();
});

const Stories = mongoose.model("Story", StorySchema);

module.exports = Stories;
