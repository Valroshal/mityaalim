import {USER_LOGGEDIN} from '../screens/types';

const INITIAL_STATE = {
    user: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log('action', action)
    switch (action.type){
        case USER_LOGGEDIN:
            return{
                ...state,
                search: action.payload
            }
        default: return state
    }
}