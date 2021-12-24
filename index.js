const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const artisRoutes = require("./routes/artis.route");
const authRoutes = require("./routes/auth.route");
const psikologRoutes = require("./routes/psikolog.route");
const userRoutes = require("./routes/user.route")
const db = require("./helpers/db");

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

async function main() {
  try {
    // memastikan database connect baru jalankan app
    await db.openDBConnection(uri);
    const app = express();

    app.use(express.json()); // agar kita bisa ambil reques body json
    app.use(artisRoutes);
    app.use(psikologRoutes);
    app.use(userRoutes);
    app.use(authRoutes);
    app.use(psikologRoutes);

    app.listen(process.env.port || 3000, "0.0.0.0", () => {
      console.log("Server is running on port", port);
    });
  } catch (error) {
    console.log("main", error);
  }
}

main();
