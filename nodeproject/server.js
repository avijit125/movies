const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./db/conn.js')
const app = express()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.use("/v1", require("./routes/auth.js"))


app.listen(5001,()=>console.log("server is running"))


