import React from 'react'
import "./MovieCard.css"
import {Link} from "react-router-dom"
function MovieCard({title, year, rating, trailer, id}) {
  return (
    <Link to={`/movies/${id}`} >
    <div className='container'>
        <iframe src={trailer}allowFullScreen/>
        <h2>{title}</h2>
        <p> {year}</p>
        <p>Rating:{rating}</p>
    </div>
    </Link>
  )
}

export default MovieCard