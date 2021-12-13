import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Card from './Card'

const Body = () => {
    const [moviesData,setMoviesData] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5000/v1/movies/All').then(res=> setMoviesData(res.data) )
    },[])

    return (
        <div className="container">
            {moviesData && console.log(moviesData.data)}
            <div className="row mt-5">
                {moviesData && moviesData.data.map((item , index)=>{
                    return(
                        <Card key={index} collection={item['Worldwide Gross']}  title={item.Title} rating={item['IMDB Rating']} releasing={item['Release Date']}/>
                    )

                })}
            </div>
        </div>
    )
}

export default Body
