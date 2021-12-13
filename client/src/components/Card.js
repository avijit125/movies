import React from 'react'
import {Link} from "react-router-dom"

const Card = ({title,rating,releasing,collection}) => {
    return (
        <div className="col-md-4 mt-5">
            <div class="card">
                <h5 class="card-header">{title}</h5>
                <div class="card-body">
                    <h5 class="card-title">Release Date : {releasing}</h5>
                    <p class="card-text">IMDB Rating {rating ? rating : "not found"}</p>
                    <Link className="btn btn-primary" to={`/details/${collection}`}> to learn collection</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Card
