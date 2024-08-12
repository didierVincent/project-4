const Exercise = require("../../models/exercise");

module.exports = {
  index,
  show,
};

async function index(req, res) {
  const exercises = await Exercise.find({})
    .sort("name")
    .populate("muscle")
    .exec();
  console.log(exercises);
  // re-sort based upon the sortOrder of the populated categories
  //   items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(exercises);
}

async function show(req, res) {
  // const exercises = await Exercise.findById(req.params.id);
  //   res.json(exercises);
}
