const { Router } = require('express');

const CalorieCountEntry = require('../model/calorieCountEntry');

const router = new Router();

router.get('/', async (req, res, next) => {
    try {
        const calorieCountEntries = await CalorieCountEntry.find();
        res.json(calorieCountEntries);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const calorieCountEntry = new CalorieCountEntry(req.body);
        const newCalorieCountEntry = await calorieCountEntry.save();
        res.json(newCalorieCountEntry);
    } catch (error) {
        console.log(error.name);
        if (error.name === 'ValidationError') {
            res.statusCode = '422';
        }
        next(error);
    }
});

router.post('/delete', async (req, res, next) => {
    try {
        CalorieCountEntry
            .findById(req.body.id)
            .exec()
            .then(entry => entry.deleteOne());
        res.json();
    } catch (error) {
        console.log(error.name);
        if (error.name === 'ValidationError') {
            res.statusCode = '422';
        }
        next(error);
    }
});

module.exports = router;