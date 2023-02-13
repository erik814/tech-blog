const { Comment } = require('../models');

const commentData = [
    {
        content: 'Offensive, take this down!',
        user_id: 4,
        post_id: 4,
    },
    {
        content: '5 stars!',
        user_id: 3,
        post_id: 3,
    },
    {
        content: 'I just keep laughing',
        user_id: 2,
        post_id: 2,
    },
    {
        content: 'I hate this',
        user_id: 1,
        post_id: 1,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
