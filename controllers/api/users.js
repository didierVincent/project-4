const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");
const Workout = require("../../models/workout");

module.exports = {
  create,
  login,
  checkToken,
  fetchData,
  updateFatigue,
  resetFatigue,
  addRestDay,
};

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json("Bad Credentials");
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    // The token is a string, but yes, we can
    // res.json a string
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  res.json(req.exp);
}

/*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    // extra data for the payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

const adjustFatigue = (fatigue) => {
  if (fatigue >= 4) {
    return fatigue - 4;
  }
  return 0;
};

async function fetchData(req, res) {
  const userId = req.user._id;
  const user = await User.findOne({ _id: userId });
  res.json(user);
}

async function updateFatigue(req, res) {
  const userId = req.user._id;
  const user = await User.findOne({ _id: userId });
  const workout = await Workout.getWorkout(userId);

  user.fatigue.torsoFatigue += workout.addedFatigue.torsoFatigue;
  user.fatigue.armsFatigue += workout.addedFatigue.armsFatigue;
  user.fatigue.legsFatigue += workout.addedFatigue.legsFatigue;

  await user.save();
  res.json(user);
}

async function resetFatigue(req, res) {
  const userId = req.user._id;
  const user = await User.findOne({ _id: userId });
  user.fatigue.torsoFatigue = 0;
  user.fatigue.armsFatigue = 0;
  user.fatigue.legsFatigue = 0;
  await user.save();
  res.json(user);
}

async function addRestDay(req, res) {
  const userId = req.user._id;
  const user = await User.findOne({ _id: userId });
  user.fatigue.torsoFatigue = adjustFatigue(user.fatigue.torsoFatigue);
  user.fatigue.armsFatigue = adjustFatigue(user.fatigue.armsFatigue);
  user.fatigue.legsFatigue = adjustFatigue(user.fatigue.legsFatigue);
  await user.save();
  res.json(user);
}
