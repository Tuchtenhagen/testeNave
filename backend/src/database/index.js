const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Posts = require('../models/Posts');
const Comments = require('../models/Comments');

const connection = new Sequelize(dbConfig);

Posts.init(connection);
Comments.init(connection);

module.exports = connection;