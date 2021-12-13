const express = require('express')
const router = express.Router()
const {postEmployes,getEmployes} = require('../controllers/auth.js')


router.post('/employes', postEmployes)
router.get('/employes',getEmployes)


module.exports = router