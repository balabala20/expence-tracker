const router = require('express').Router();
const Goal = require('../models/Goal');
const auth = require('../middleware/auth');

// @route   POST api/goals
// @desc    Add a new goal
router.post('/', auth, async (req, res) => {
    const { name, targetAmount, targetDate } = req.body;
    try {
        const newGoal = new Goal({
            user: req.user.id,
            name,
            targetAmount,
            targetDate
        });
        const goal = await newGoal.save();
        res.json(goal);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/goals
// @desc    Get all goals for a user
router.get('/', auth, async (req, res) => {
    try {
        const goals = await Goal.find({ user: req.user.id }).sort({ targetDate: 1 });
        res.json(goals);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/goals/:id
// @desc    Update a goal (details or progress)
router.put('/:id', auth, async (req, res) => {
    try {
        let goal = await Goal.findById(req.params.id);
        if (!goal) return res.status(404).json({ msg: 'Goal not found' });
        if (goal.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        goal = await Goal.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.json(goal);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/goals/:id
// @desc    Delete a goal
router.delete('/:id', auth, async (req, res) => {
    try {
        let goal = await Goal.findById(req.params.id);
        if (!goal) return res.status(404).json({ msg: 'Goal not found' });
        if (goal.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Goal.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Goal removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;