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
    const allPosts = await Post.findAll({
        include: [
            {model: User},
        ]
    });

    return res.json(allPosts);
});

module.exports = router;