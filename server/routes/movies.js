const express = require('express')
const router = express.Router();
const getMovies = require('../controllers/movies.js')


router.get('/All', getMovies)

module.exports = router