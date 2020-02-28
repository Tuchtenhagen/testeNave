const express = require('express');
const PostsController = require('./controllers/PostsController');
const CommentsController = require('./controllers/CommentsController');

const routes = express.Router();

routes.get('/posts', PostsController.index);
routes.post('/posts', PostsController.store);

routes.post('/comments', PostsController.store);

module.exports = routes;