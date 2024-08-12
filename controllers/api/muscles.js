const Muscle = require("../../models/muscle");

module.exports = {
  index,
  show,
};

async function index(req, res) {
  const muscles = await Muscle.find({});
  console.log(muscles);
  //   muscles.sort((a, b) => a.muscle.sortOrder - b.muscle.sortOrder);

  // re-sort based upon the sortOrder of the populated categories
  //   items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(muscles);
}

async function show(req, res) {
  // const exercises = await Exercise.findById(req.params.id);
  //   res.json(exercises);
}
