const WebinarModel = require("../models/webinar.model");

class WebinarController {
  static async createNewWebinar(req, res) {
    // todo: get `name` from req body
    // create a new artis object
    // save to db
    try {
      const body = req.body;

      const title = body.title;
      const thumbnail = body.thumbnail;
      const desc = body.desc;
      const url = body.url;
      const author = body.author;

      const webinar = new WebinarModel({
        title: title,
        thumbnail: thumbnail,
        desc: desc,
        url: url,
        author: author,
      });

      const saved = await webinar.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllWebinar(req, res) {
    try {
      const webinarList = await WebinarModel.find();
      res.status(200).send(webinarList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getWebinarByID(req, res) {
    try {
      const id = req.params.id;

      const webinarList = await WebinarModel.findOne({
        _id: id,
      });
      res.status(200).send(webinarList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateWebinar(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      const title = body.title;
      const thumbnail = body.thumbnail;
      const desc = body.desc;
      const url = body.url;
      const author = body.author;

      const webinarList = await WebinarModel.updateOne(
        { _id: id },
        {
          title: title,
          thumbnail: thumbnail,
          desc: desc,
          url: url,
          author: author,
        }
      );
      res.status(200).send(body);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteWebinar(req, res) {
    try {
      const id = req.params.id;
      await WebinarModel.deleteOne({ _id: id });
      res.status(200).send({ message: `${id} has been deleted` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = WebinarController;
