const router = require('express').Router();
const { Post, User } = require('../models');

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render("login");
});

router.get('/', async (req, res) => {
    try {
      // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
            {
                model: User,
                attributes: ['username'],
            },
            ],
        });
      // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
      // Pass serialized data and session flag into template
        res.render('homepage', { 
            posts, 
            // logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;