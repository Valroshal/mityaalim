import {SEARCH_CHANGE} from '../screens/types';

export const searchChanged = (search) =>{
    return {
        type: SEARCH_CHANGE,
        payload: search
    }
}