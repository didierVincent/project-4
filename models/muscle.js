const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const muscleSchema = new Schema(
  {
    name: { type: String, required: true },
    sortOrder: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Muscle", muscleSchema);
