require('dotenv').config()
const express = require('express')


const app = express()


app.get('/', (req, res) => {
    res.send('running!')
})

//listen
app.listen(process.env.PORT, () => {
    console.log('listening on port 500011')})




