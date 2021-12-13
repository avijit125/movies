const moviesData = require('../datasets/moviesdata.js')

const getMovies = (req, res)=>{
    try {
        res.status(200).json({data: moviesData})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = getMovies;