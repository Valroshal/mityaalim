import {SEARCH_CHANGE, VIDEOS_FETCHED, VIDEOS_FAILED, USER_LOGGEDIN, USER_FETCHED, USER_FAILED} from '../screens/types';

export const searchChanged = (search) =>{
    return {
        type: SEARCH_CHANGE,
        payload: search
    }
}

export const userLoggedIn = (data) =>{
    return {
        type: USER_LOGGEDIN,
        payload: data
    }
}

//need to change get to needed db
export const getVideos = (search) => async (dispatch) => {
    function onSuccess(success){
        dispatch({ type:  VIDEOS_FETCHED,
                    payload: success})
        return success
    }
    function onError(error){
        dispatch({ type:  VIDEOS_FAILED, error})
    }
    try{
        const res = await fetch('http://localhost:5000/getuser', {method: 'GET'})
        const success = await res.json()
        console.log('success', success);
        return onSuccess(success)
    }catch(error){
        return onError(error)
    }
}

//need to change get to needed db
export const getUser = (data) => async (dispatch) => {
    function onSuccess(success){
        dispatch({ type:  USER_FETCHED,
                    payload: success})
        return success
    }
    function onError(error){
        dispatch({ type:  USER_FAILED, error})
    }
    try{
        const res = await fetch('http://localhost:5000/getuser', {method: 'GET'})
        const success = await res.json()
        console.log('success', success);
        return onSuccess(success)
    }catch(error){
        return onError(error)
    }
}