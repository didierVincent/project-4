const Schema = require("mongoose").Schema;

const exerciseSchema = new Schema(
  {
    name: { type: String, required: true },
    muscle: { type: [Schema.Types.ObjectId], ref: "Muscle" },
    torsoFatigue: Number,
    armsFatigue: Number,
    legsFatigue: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = exerciseSchema;
