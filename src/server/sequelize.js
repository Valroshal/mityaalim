const Sequelize = require('sequelize');
const UserModel = require('./models/user');

const sequelize = new Sequelize('userdb', 'valerie', 'val0527475185', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync()
.then(() => {
    console.log('users db and user table have been created')
});

module.exports = User;