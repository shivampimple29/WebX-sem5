const express = require ('express')
// const users = require ('./MOCK_DATA.json')
const fs = require ('fs')
const app = express ()
const mongoose = require ('mongoose')
const PORT = 8000
const User = require ('./models/user')
const { connectToMongoDb } = require ('./connect')
const { logReqRes } = require ('./middlewares/index')
const userRoute = require ('./routes/user')
const cors = require ('cors')

connectToMongoDb ('mongodb://127.0.0.1:27017/first-application')
    .then (() => console.log ('MongoDB connected'))


// Middleware - Plugin 
app.use (express.urlencoded ({ extended : false }))
app.use (cors ())


logReqRes ('logs.txt')

app.use (express.json ())

app.use ('/api/users', userRoute)


app.listen (PORT, ()=> console.log (`Server running on PORT ${PORT}`))