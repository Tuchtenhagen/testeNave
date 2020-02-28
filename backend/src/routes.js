const express = require('express');
const PostsController = require('./controllers/PostsController');
const CommentsController = require('./controllers/CommentsController');

const routes = express.Router();

routes.get('/posts', PostsController.index);
routes.post('/posts', PostsController.store);

routes.post('/posts/:post_id/comments', CommentsController.store);
routes.get('/posts/:post_id/comments', CommentsController.index);

module.exports = routes;