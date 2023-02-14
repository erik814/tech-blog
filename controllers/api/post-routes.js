const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const bcrypt = require('bcrypt');

// sign up
router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        res.status(200).json({message: newUser});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        const dbUser = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        
        if(!dbUser){
            res.status(400).json({message: 'Incorrect Username!'});
            return;
        }

        const validPassword = dbUser.checkPassword(req.body.password);

        if(!validPassword){
            res.status(400).json({message: 'Incorrect password!'});
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res.json({user: dbUser, message: 'You are now logged in!'});
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

// logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});



// create new post

// router.post('/', async (req, res) => {
//     // res.json({message: req.body})

//     const {title, text, user_id} = req.body;
    
//     try {
//         const newPost = await Post.create({
//             title: req.body.title,
//             content: req.body.content,
//             user_id: req.body.user_id
//         });

//         res.json(newPost);
//     } catch (error) {
//         console.log(error);
//         res.status(400).json(error);
//     }
// })

// create comment

router.post('/comments', async (req, res) => {
    // res.json({message: req.body})

    const {content, user_id, post_id} = req.body;
    
    try {
        const newComment = await Comment.create({
            content: req.body.content,
            user_id: req.body.user_id,
            post_id: req.body.post_id
        });

        res.json(newComment);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})


module.exports = router;