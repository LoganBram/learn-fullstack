const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.json({ mssg: 'workouts get route'})
})

//GET single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'get single workout'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'workouts post route'})
})

//DELET a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'workouts post route'})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'workouts post route'})
})




module.exports = router