const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Posts = require('../models/Posts');
const Comments = require('../models/Comments');

const connection = new Sequelize(dbConfig);

Posts.init(connection);
Comments.init(connection);

Comments.relation(connection.models);
Posts.relation(connection.models);

module.exports = connection;