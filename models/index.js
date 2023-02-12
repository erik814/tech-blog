const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');
const PostComment = require('./PostComment');
const PostUser = require('./PostUser');


Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// user has many posts

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// user has many comments

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});


module.exports = {
    Comment,
    Post,
    User,
    PostComment,
    PostUser
};