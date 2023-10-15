import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {baseUrl, options} from "../constants/apiConstans"
import {Splide, SplideSlice} from '@splidejs/react-splide'
const MovieList = ({genre}) => {
    const[movies,setMovies] = useState(null)
    useEffect(() => {
        
        axios
        .get(`/discover/movie?include_adult=false&include_video=false&language=en_US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,options)
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.log(err))
    },[])
  return (
    <div>
        <h1 className='fs-1 mb-3 mt-3'>{genre.name}</h1>
        <Splide 
        options={{
            gap:'10px',
            autoWİdth:true,
            pagination:false
        }} aria_label="my favourite">
            {movies?.map((movie) => (
            <SplideSlice>
              <Link to={`/movie/${movie.id}`}><img className='movie' src={baseUrl.concat(movie.poster_path)} /></Link>  
            </SplideSlice>
            ))}
        </Splide>
    </div>
  )
}

export default MovieList