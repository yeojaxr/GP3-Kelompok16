const express = require("express");

const ArtisController = require("../controllers/artis.controller");

// creates a new router instance
const router = express.Router();

// router
router.post("/artis", ArtisController.createNewArtis);
router.get("/artis", ArtisController.getAllArtis);
router.get("/artis:id", ArtisController.getArtisByID);
router.patch("/artis:id", ArtisController.updateArtis);
router.delete("/artis:id", ArtisController.deleteArtis);

module.exports = router;