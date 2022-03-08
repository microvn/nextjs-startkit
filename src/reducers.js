import {combineReducers} from 'redux';
import Users from './containers/users/reducers'

export default combineReducers({
	users: Users
})
