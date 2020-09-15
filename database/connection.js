const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;