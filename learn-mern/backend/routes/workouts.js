const express = require('express')

const {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController.js')

const router = express.Router()



router.get('/', getWorkouts)

//GET single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELET a new workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)




module.exports = router