const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(protect, allUsers).post(registerUser);
router.post("/login", authUser);

module.exports = router;
