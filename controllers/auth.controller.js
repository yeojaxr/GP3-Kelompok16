const AuthModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

class AuthController {
  static async postRegister(req, res) {
    // get `email, password` from req body
    // hash password
    // create a new user object
    // save to db
    const { email, password } = req.body;

    try {
      const salt = await bcrypt.genSalt(10);
      const hashesPassword = await bcrypt.hash(
        password,
        salt
      );
      const user = new AuthModel({
        email: email,
        password: hashesPassword,
      });

      const saved = await user.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500);
      console.log(error);
    }
  }

  static async postLogin(req, res) {
    // get `email, password` from req body
    // search email in db
    // if find compare the password
    // if matched user logged in
    const { email, password } = req.body;

    try {
      const user = await UserModel.findOne({
        email: email,
      });
      if (user) {
        const auth = await bcrypt.compare(
          password,
          user.password
        );
        if (auth) {
          const accessToken = jwt.sign({ username: user.username,  role: user.role }, process.env.TOKEN_SECRET);
          res.json({
            message: "Login success",
            accessToken
          });
        } else {
          res.json({
            message: "Incorrect password",
          });
          throw Error("Incorrect password");
        }
      } else {
        res.json({
          message: "Incorrect email",
        });
        throw Error("Incorrect email");
      }
    } catch (error) {
      res.status(500);
      console.log(error);
    }
  }
}

module.exports = AuthController;
