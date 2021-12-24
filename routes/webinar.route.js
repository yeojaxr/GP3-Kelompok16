const express = require("express");

const WebinarController = require("../controllers/webinar.controller");

// creates a new router instance
const router = express.Router();

// router
router.post("/webinar", WebinarController.createNewWebinar);
router.get("/webinar", WebinarController.getAllWebinar);
router.get("/webinar/:id", WebinarController.getWebinarByID);
router.patch("/webinar/:id", WebinarController.updateWebinar);
router.delete("/webinar/:id", WebinarController.deleteWebinar);

module.exports = router;