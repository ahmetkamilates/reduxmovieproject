import axios from "axios";
import { actionsTypes } from "./ActionsTypes";
import { options } from "../../constants/apiConstans";

axios.defaults.baseURL='https://api.themoviedb.org/3'

export const setLoading = (payload) => ({
    type:actionsTypes.SET_LOADING,
        payload
})
    
        
    



export const getMovies = () => {
    return async function(dispatch){
      const response = await axios
        .get('/movie/popular',options)
        .then((response) => {
         
            dispatch({
            type:actionsTypes.SET_MOVIES,
            payload: response.data.results
         })   
        }).catch((err) => {
            console.log(err)
        });
    }
}