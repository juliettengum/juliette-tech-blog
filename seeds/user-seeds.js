const { User } = require('../models');
const bcrypt = require('bcrypt');

// test password
const userPassword = '1234567'; 

const userData = [
    {
        username: "jon_snow",
        password: bcrypt.hashSync(userPassword, bcrypt.genSaltSync(10), null)
    },
    {
        username: "martin_bull",
        password: bcrypt.hashSync(userPassword, bcrypt.genSaltSync(10), null)
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;