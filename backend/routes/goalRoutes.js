const router = require("express").Router();
const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

module.exports = router;
