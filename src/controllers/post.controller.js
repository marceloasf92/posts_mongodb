import postSchema from "../schema/post.schema.js";

export default class PostController {
  async create(req, res) {
    try {
      const posts = await postSchema.create(req.body);
      return res.status(201).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async listAll(req, res) {
    try {
      const posts = await postSchema.find({});
      return res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async listOne(req, res) {
    try {
      const posts = await postSchema.findOne(req.params);
      return res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async update(req, res) {
    try {
      const posts = await postSchema.updateOne(req.params, req.body);
      return res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async delete(req, res) {
    try {
      const posts = await postSchema.remove(req.params);
      return res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
