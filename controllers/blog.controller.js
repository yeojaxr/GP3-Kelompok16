const BlogModel = require("../models/blog.model");
const categoryModel = require("../models/category.model");

class BlogController {
  // POST
  static async postNewBlog(req, res) {
    try {
      const body = req.body;

      const title = body.title;
      const desc = body.desc;
      const photo = body.photo;
      const author = body.author;
      const categories = body.categories;

      const blog = new BlogModel({
        title: title,
        desc: desc,
        photo: photo,
        author: author,
        categories: categories,
      });
      
      const saved = await blog.save();
      res.status(201).send(saved);
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error });
    }
  }

  //GET ALL
  static async getAllBlog(req, res) {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await BlogModel.find({ username });
      } else if (catName) {
        posts = await BlogModel.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await BlogModel.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //GET BY ID
  static async getBlogByID(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // UPDATE
  static async updateBlog(req, res) {
    try {
      const post = await BlogModel.findById(req.params.id);
      if (post.author === req.body.username) {
        try {
          const updatedPost =
            await BlogModel.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("can update only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // DELETE
  static async deleteBlog(req, res) {
    try {
      const post = await BlogModel.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("delete success");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = BlogController;
