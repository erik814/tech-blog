const { User } = require('../models');

const userData = [
    {
        username: "Swifty789",
        password: "mirrorball"
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;