import { actionsTypes } from "../actions/ActionsTypes"

const initialState ={
    popularMovies:[],
    genres:[],
    isLoading:true
}
export const movieReducer = (state = initialState,action) => {
switch(action.type){
    case actionsTypes.SET_MOVIES:
    return{
        ...state,
        popularMovies:action.payload,
        isLoading:false
    }
    case actionsTypes.SET_CATEGORIES:
        return{
            ...state,
            genres:action.payload
        }

    default:
        return state
}
}