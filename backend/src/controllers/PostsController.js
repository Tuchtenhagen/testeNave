const Posts = require('../models/Posts')

module.exports = {
  async store(req, res) {
    const { author, title, text } = req.body;

    const posts = await Posts.create({ author, title, text });

    return res.json(posts);
  },

  async index(req, res) {
    const posts = await Posts.findAll();

    return res.json(posts);
  }
};