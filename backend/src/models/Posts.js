const { Model, DataTypes } = require('sequelize');

class Posts extends Model {
  static init(connection) {
    super.init({
      author: DataTypes.STRING,
      title: DataTypes.STRING,
      text: DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }
  static relation(models) {
    this.hasMany(models.Comments, { foreignKey: 'post_id', as: 'comments' });
  }
}

module.exports = Posts;