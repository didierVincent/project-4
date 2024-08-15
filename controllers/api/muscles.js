const Muscle = require("../../models/muscle");

module.exports = {
  index,
};

async function index(req, res) {
  const muscles = await Muscle.find({});
  res.json(muscles);
}
