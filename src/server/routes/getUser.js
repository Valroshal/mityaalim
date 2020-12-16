const User = require('../sequelize');

module.exports = (app) => {
// get all users
app.get('/getuser', (req, res) => {
    User.findAll().then(users => res.json(users))
})
}