require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}, (error) => {
    if (error)
        console.log(error)
    else
        console.log('MongoDB Connected')
})

app.use('/user', express.json(), userRouter)

app.use('/admin', express.json(), adminRouter)

app.listen(process.env.PORT, () => {
    console.log("Server running on port 3000")
})

//A validation system was developed in order to warn the user when the login or the password do not contain the minimum characters required