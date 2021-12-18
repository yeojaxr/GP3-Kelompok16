const express = require("express");
const router = express.Router();

const artisRoutes = require("./artis.route");

router.get("/ping", (req, res) => {
  const ready = {
    status: "server is ready",
  };

  res.status(200).send(ready);
});

router.use("/artis", artisRoutes);

module.exports = router;
