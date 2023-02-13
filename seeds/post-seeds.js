const { Post } = require('../models');

const commentData = [
    {
        title: 'Study says AI will end humanity in 15 years',
        content: 'This will super definitely happen, and we should panic!',
        date_time: '2023-01-23',
        user_id: 1
    },
    {
        title: 'Four screens is the latest tech craze',
        content: 'The more the better. It shows people around you that you make more moeny than them.',
        date_time: '2023-01-25',
        user_id: 2
    },
    {
        title: 'If you own a computer, you are compromised',
        content: 'New study shows that every computer owner has had their social security number stolen.',
        date_time: '2023-02-02',
        user_id: 3
    },
    {
        title: 'Eating tofu helps code faster',
        content: 'Developer says he only eats tofu and codes 3 times faster!',
        date_time: '2023-02-08',
        user_id: 4
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;