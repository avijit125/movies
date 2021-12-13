const mongoose = require('mongoose')


const employesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 6
    },
    email:{
        type: String,
        required: true,
        unique:[true,"this email already present here"],
    },
    address:{
        type: String,
        required: true,
    }
},{ runValidators: true })

const Empolye = new mongoose.model('Employe', employesSchema);

module.exports = Empolye