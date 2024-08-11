const mongoose = require("mongoose");
require("./muscle");

const exerciseSchema = require("./exerciseSchema");

module.exports = mongoose.model("Exercise", exerciseSchema);
