const Workout = require('../models/workoutmodel.js')
const mongoose = require('mongoose')

//get all workouts

const getWorkouts = async (req, res) => {
    //finds all workouts in db
    const workouts = await Workout.find({}).sort({createdAt: -1})
    //sends the workouts back
    res.status(200).json(workouts)
}

//get single workout
const getWorkout = async (req, res) => {
    //grabs id property from request object
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){  
        return res.status(404).json({error: 'Invalid ID'})
    }

    const workout = await Workout.findById(id)
    if (!workout){
        return res.status(404).json({error: 'workout not found'})
    }

    res.status(200).json(workout)
}


//create a workout
const createWorkout = async(req, res) => {
    //accepts data of post request
    const {title, load, reps} = req.body

    //add doc to db
    try{
        //creates a model instance, using the accepted data
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)

    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout

const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){  
        return res.status(404).json({error: 'Invalid ID'})
    }

    //find workout that has _id of id and delete
    const workout = await Workout.findOneAndDelete({_id: id})
    res.status(200).json(workout)

    if (!workout){
        return res.status(404).json({error: 'workout not found'})
    }


}

//update a workout

const updateWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){  
        return res.status(404).json({error: 'Invalid ID'})
    }

    //what we replacing/how to find it, what to update with
    const workout = await Workout.findOneAndUpdate({_id:id}, {...req.body})

    if (!workout){
        return res.status(404).json({error: 'workout not found'})
    }

    res.status(200).json(workout)




}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout

}