const Exercise = require("../../models/exercise");

module.exports = {
  index,
  show,
};

async function index(req, res) {
  const exercises = await Exercise.find({}).populate("muscle").exec();
  res.json(exercises);
}

async function show(req, res) {
  const exercise = await Exercise.findById(req.params.id);
  res.json(exercise);
}
