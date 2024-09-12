const express = require("express");
const {
  registerUser,
  getUser,
  getUsers,
  loginUser,
} = require("../models/usersAccessDataService");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let user = await registerUser(req.body);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    const token = await loginUser(email, password);
    res.send(token);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let user = await getUser(id);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    let users = await getUsers();
    res.send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
