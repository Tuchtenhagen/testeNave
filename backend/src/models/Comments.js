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
}

module.exports = Comments;