import React from 'react'
import Navbar from './Navbar'
import {useParams, Link} from 'react-router-dom'

const Details = () => {
    let params = useParams();
    return (
        <>
        <Navbar/>
         <div className='container mt-5'>
             <div className='row'>
                 <div className="col">

                 <p> world wide collection {params.id}</p>
                 <Link className=" btn btn-outline-primary btn-sm" to="/"> Go back</Link>
                 </div>
             </div>
         </div>
            
        </>
    )
}

export default Details
