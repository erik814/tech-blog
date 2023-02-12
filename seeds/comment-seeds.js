const { Comment } = require('../models');

const commentData = [
    {
        text: 'Offensive, take this down!',
        user_id: 4,
        post_id: 4,
    },
    {
        text: '5 stars!',
        user_id: 3,
        post_id: 3,
    },
    {
        text: 'I just keep laughing',
        user_id: 2,
        post_id: 2,
    },
    {
        text: 'I hate this',
        user_id: 1,
        post_id: 1,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
