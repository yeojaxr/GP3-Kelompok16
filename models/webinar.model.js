const mongoose = require("mongoose");

const opts = {
  timestamps: true,
};

const webinarSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    desc: {
      type: [String],
    },
    url: {
      type: [String],
    },
    author: {
      type: [String],
    },
  },
  opts
);

// create new model (nameCollection, nameSchema)
const WebinarSchema = mongoose.model("Webinar", webinarSchema);

module.exports = WebinarSchema;
