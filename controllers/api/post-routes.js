const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

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
        }

        

        // res.json({message: dbUser});
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});


module.exports = router;