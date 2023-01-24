const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')


// @route   GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @route   POST /api/goals
const createGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goal)
})

// @route   PUT /api/goals/:id
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal)
})

// @route   DELETE /api/goals/:id
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()
    res.status(200).json({message: `Deleted ID: ${req.params.id}`})
})


module.exports = { 
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals
}