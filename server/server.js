const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const moviesRoutes = require('./routes/movies.js')

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/v1/movies', moviesRoutes);
 
//http://localhost:5000/v1/movies/All


app.listen(5000,()=> console.log("server is running"))