const mongoose = require("mongoose");

const opts = {
  timestamps: true,
};

const artisSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    genre: {
      type: String,
    },
    songs: {
      type: Array,
      default: [],
    },
  },
  opts
);

// Create new model(nameCollection, nameSchema)
const ArtisModel = mongoose.model("Artis", artisSchema);

module.exports = ArtisModel;
