const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
});

const getMe = asyncHandler(async (req, res) => {
  req.status(200).json(req.user);
});

const generateToken = (id) => {};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
