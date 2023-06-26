require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts.js')
const path = require('path');

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req,path, req.method)
    next()
})

//when go to /api/workouts, use workoutRoutes
app.use('/api/workouts', workoutRoutes)

//listen
app.listen(process.env.PORT, () => {
    console.log('listening on port 500011')})




