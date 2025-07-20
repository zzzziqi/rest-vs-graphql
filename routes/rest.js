// routes/rest.js
const express = require("express");
const router = express.Router();
const { users } = require("../data");

// GET /users
router.get("/", (req, res) => {
  res.json(users);
});

// GET /users/:id
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

module.exports = router;
