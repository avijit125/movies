const mongoose = require('mongoose')
 mongoose.connect("mongodb://localhost:27017/dashboard",{
     useNewUrlParser: true,
     useUnifiedTopology:true
 }).then(()=> console.log("database connected succesfully")).catch(err=>console.log(err))