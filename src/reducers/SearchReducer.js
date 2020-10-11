import {SEARCH_CHANGE} from '../screens/types';

const INITIAL_STATE = {
    search: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log('action', action)
    switch (action.type){
        case SEARCH_CHANGE:
            return{
                ...state,
                search: action.payload
            }
        default: return state
    }
}