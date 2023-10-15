import axios from "axios";
import { actionsTypes } from "../redux/actions/ActionsTypes";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWYxZTU2MWQ1ZGE1NTVjYjMyYmMzYmUxODBkMmM5YyIsInN1YiI6IjY1MjZkZjQxY2VkYWM0MDBmZjI5NDcxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HXrIu2fynN-XFiuMi4D2A2-ln5rwSHzefQY2-vPeKTE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
 export const baseUrl =` https://api.themoviedb.org/3/movie/${movie_id}/images`


 export const getGenres = () => (dispatch) => {
  axios.get('/genre/movie/list?language=tr',options)
  .then((res) => dispatch({
    type:actionsTypes.SET_CATEGORIES,
    payload:res.data.genres
  }))
 }