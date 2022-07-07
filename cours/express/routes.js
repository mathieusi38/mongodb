const express = require('express');
const Dog = require('./models/Dog');

const router = express.Router();

module.exports = router;

router.get('/dogs', async (req, res) => {
    const dogs = await Dog.find();
    res.send(dogs);
})

router.post('/dogs', async (req, res) => {
    const dog = new Dog({
        name: req.body.name,
        color: req.body.color,
        race: req.body.race
    })

    await dog.save();

    res.send(dog);
})