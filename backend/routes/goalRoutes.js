const router = require("express").Router();
const {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(addGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
