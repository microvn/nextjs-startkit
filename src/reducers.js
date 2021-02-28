import {combineReducers} from 'redux';

import Users from './containers/users/reducers'

const combined = () => ({
	users: Users
})

export default combined
