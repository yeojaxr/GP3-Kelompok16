const mongoose = require("mongoose");

const opts = {
    timestamps: true,
};

const psikologSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        profile: {
            type: String,
        },
        keahlian: {
            type: [String], 
        },
        keahlian_lain: {
            type: [String], 
        },
        pendekatan_terapi: {
            type: [String], 
        },
    },
    opts
);

// create new model (nameCollection, nameSchema)
const PsikologSchema = mongoose.model("Psikolog", psikologSchema);

module.exports = PsikologSchema;