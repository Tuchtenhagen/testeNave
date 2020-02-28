const Comments = require('../models/Comments');
const Posts = require('../models/Posts');

module.exports = {
  async store(req, res) {
    const { post_id } = req.params;
    const { message, author } = req.body;

    const posts = await Posts.findByPk(post_id);

    if(!posts) {
      return res.status(400).json({ error: 'Post not found' })
    }

    const comments = await Comments.create({
      message,
      author,
      post_id,
    });

    return res.json(comments);
  },

  async index(req,res) {
    const { post_id } = req.params;

    const posts = await Posts.findByPk(post_id, {
      include: { association: 'comments' }
    });

    return res.json(posts);
  }
};