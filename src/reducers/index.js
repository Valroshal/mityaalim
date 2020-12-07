import {combineReducers} from 'redux';
import SearchReducer from './SearchReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    search: SearchReducer,
    user: UserReducer
})