import {LOAD_USERS, LOADED_USERS, REMOVE_USER} from './constants'


export function loadUsers() {
	return {
		type: LOAD_USERS,
	}
}

export function removeUser(id) {
	return {
		type: REMOVE_USER,
		payload: id
	}
}
