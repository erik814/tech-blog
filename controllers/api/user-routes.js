const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

// create new post

router.post('/', async (req, res) => {
    // res.json({message: req.body})

    const {title, text, user_id} = req.body;
    
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id
        });

        res.json(newPost);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})

module.exports = router;