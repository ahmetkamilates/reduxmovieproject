import React, { useEffect } from 'react'
import { options } from '../constants/apiConstans'
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import { actionsTypes } from '../redux/actions/ActionsTypes'
import Hero from '../components/Hero'

import { getMovies, setLoading , getGenres} from '../redux/actions/actions'
import MovieList from '../components/MovieList'

const mainPages = () => {
  
    const dispatch = useDispatch()
    const {genres} = useSelector((store) => ({genres:store.movieReducer.genres}))
    useEffect(() => {
        dispatch(setLoading(true))

      dispatch(getMovies())

      dispatch(getGenres())
    },[])
  return (
    <div>
       <Hero/>
    {genres.map((genre) => <MovieList key={genre.id} genre={genre}/>)}
    </div>
   
  )
}

export default mainPages