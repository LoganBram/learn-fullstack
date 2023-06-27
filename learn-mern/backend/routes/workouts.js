const express = require('express')
const Workout = require('../models/workoutmodel.js')

const router = express.Router()



router.get('/', (req, res) => {
    res.json({ mssg: 'workouts get route'})
})

//GET single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'get single workout'})
})

//POST a new workout
router.post('/', async(req, res) => {
    //accepts data of post request
    const {title, load, reps} = req.body
    try{
        //creates a model instance, using the accepted data
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)

    }catch(error){
        res.status(400).json({error: error.message})
    }

    
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