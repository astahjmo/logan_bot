const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js');

class Blacklist extends Model {}

module.exports = Blacklist.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, {
    sequelize,
    modelName: 'blacklist',
});
