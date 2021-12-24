const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    data: {
      type: Array
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);