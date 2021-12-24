const express = require("express");

const UserController = require("../controllers/user.controller");

// create a new router instance
const router = express.Router();

// router
router.post("/user", UserController.createNewUser);
router.get("/user", UserController.getAllUser);
router.get("/user/:id", UserController.getUserByID);
router.patch("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;
