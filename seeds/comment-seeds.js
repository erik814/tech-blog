const { Comment } = require('../models');

const commentData = [
    {
        text: 'OMG THIS IS SO FUNNY'
    },
    {
        text: 'Offensive, take this down!'
    },
    {
        text: '5 stars!'
    },
    {
        text: 'I just keep laughing'
    },
    {
        text: 'I hate this'
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
