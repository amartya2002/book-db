"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authors: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: DataTypes.STRING,
      publicationYear: DataTypes.INTEGER,
      publisher: DataTypes.STRING,
      language: DataTypes.STRING,
      description: DataTypes.TEXT,
      pages: DataTypes.INTEGER,
      summary: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      coverImage: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};