import {combineReducers} from 'redux';

import Users from './pages/users/reducers'

export default combineReducers({
	users: Users
})
