const UserModel = require("../models/user.model");

class UserController {
  static async createNewUser(req, res) {
    // todo: get `name` from req body
    // create a new artis object
    // save to db
    try {
      const body = req.body;

      const email = body.email;
      const password = body.password;

      const user = new UserModel({
        email: email,
        password: password,
      });

      const saved = await user.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllUser(req, res) {
    try {
      const userList = await UserModel.find();
      res.status(200).send(userList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getUserByID(req, res) {
    try {
      const id = req.params.id;

      const userList = await UserModel.findOne({
        _id: id,
      });
      res.status(200).send(userList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateUser(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      const first_name = body.first_name;
      const last_name = body.last_name;
      const email = body.email;
      const no_telepon = body.no_telepon;

      const userList = await UserModel.updateOne(
        { _id: id },
        {
          first_name: first_name,
          last_name: last_name,
          email: email,
          no_telepon: no_telepon,
        }
      );
      res.status(200).send(body);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteUser(req, res) {
    try {
      const id = req.params.id;
      await UserModel.deleteOne({ _id: id });
      res.status(200).send({ message: `${id} has been deleted` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = UserController;
