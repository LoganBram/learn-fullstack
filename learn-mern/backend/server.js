require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
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


//connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listening on port 500011')})

})
    .catch((err) => console.log(err))  






