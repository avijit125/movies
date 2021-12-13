const Employe = require("../models/auth.js")

const postEmployes = async(req,res)=>{
    try {
       const user = new Employe(req.body)
       const createdUser = await user.save()
       res.status(201).send(createdUser)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getEmployes = async(req,res)=>{
    try {
        const employes = await Employe.find()
        res.status(200).send(employes)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    postEmployes,getEmployes
} 
    
    