const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  req.statusCode(200).json(goals);
});

const addGoal = asyncHandler(async (req, res) => {});

const updateGoal = asyncHandler(async (req, res) => {});

const deleteGoal = asyncHandler(async (req, res) => {});

module.exports = {
  getGoals,
  addGoal,
  updateGoal,
  deleteGoal,
};
