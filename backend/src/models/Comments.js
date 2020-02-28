const { Model, DataTypes } = require('sequelize');

class Comments extends Model {
  static init(connection) {
    super.init({
      message: DataTypes.STRING,
      author: DataTypes.STRING,
    }, {
      sequelize: connection
    })
  }
  
  static relation(models) {
    this.belongsTo(models.Posts, { foreignKey: 'post_id', as: 'post' });
  }
}

module.exports = Comments;