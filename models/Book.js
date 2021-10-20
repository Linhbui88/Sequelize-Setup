const sequelize = require('../config/connection')
const {Model, DataTypes} = require('sequelize')

class Book extends Model {}
Book.init({
  title: {
    type: DataTypes.STRING
  },
  author: {
    type: DataTypes.STRING
  },
  isbn: {
    type: DataTypes.STRING
  },
  pages: {
    type: DataTypes.INTEGER
  },
  edition: {
    type: DataTypes.INTEGER
  },
  is_paperback: {
    type: DataTypes.BOOLEAN
  }
},
{
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: 'book'
}

);
module.exports = Book;