const asyncHandler = require('express-async-handler')


// @route   GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Goals'})
})
// @route   POST /api/goals
const createGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Createt Goals'})
})

// @route   PUT /api/goals/:id
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Goals ${req.params.id}`})
})

// @route   DELETE /api/goals/:id
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Goals ${req.params.id}`})
})


module.exports = { 
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals
}