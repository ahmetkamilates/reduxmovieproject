import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import { baseUrl } from '../constants/apiConstans'
import { Link } from 'react-router-dom'
const Hero = () => {



    const {movieList,isLoading} = useSelector((store) => ({
        movieList: store.movieReducer.popularMovies,
        isLoading: store.movieReducer.isLoading,
    }))


        const randomIndex = Math.floor(Math.random() * movieList.length)
        const randomMovie = movieList[randomIndex]
    

        return (
            <div className='row p-4'>
                {isLoading && <Loading/>}
                {!isLoading && (
                <div>
                    <div className='col-md-6 d-flex flex-column gap-3 align-items-center justify-content-center '>
                       <h1> {randomMovie.title}</h1>
                       <p>{randomMovie.overview}</p>
                       <p className='text-warning fw-bold'>IMBD {randomMovie.vote_average}</p>
                    </div>
                    <div className='d-flex gap-3'>
                        <Link to={`movie=${randomMovie.id}`} className='btn btn-danger'>
                            Film İzle
                        </Link>
                        <Link className='btn btn-info' >
                            Listeye Ekle
                        </Link>
                    </div>
                    <div className='col-md-6'>
                        <img 
                        className='img-fluid'
                        src={`${baseUrl}${randomMovie.backdrop_path}`}  />
                    </div>
                </div>
               
                )}
                
            </div>
    
  )
}

export default Hero