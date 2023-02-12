const { User } = require('../models');

const userData = [
    {
        username: "Swifty789",
        password: "mirrorball"
    },
    {
        username: "CheeseBalls",
        password: "hdtv"
    },
    {
        username: "SusanG",
        password: "microwave43"
    },
    {
        username: "Yeti86",
        password: "tobogan"
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;