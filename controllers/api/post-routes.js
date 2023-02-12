const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const bcrypt = require('bcrypt');

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

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;