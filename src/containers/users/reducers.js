import {LOADED_USERS, LOAD_USERS, REMOVE_USER} from './constants'

// The initial state of the App
const initialState = {
	loaded: false,
	error: false,
	currentPage: 1,
	total: 0,
	limit: 0,
	keyword: '',
	list: {}
};

export default function (state = initialState, action) {
	const {type, payload} = action;
	switch (type) {
		case LOAD_USERS:
			return {...state};
		case LOADED_USERS:
			return {
				...state,
				loaded: payload.loaded,
				list: payload.list,
				total: payload.total,
				limit: payload.limit,
				currentPage: payload.page,
				keyword: payload.keyword,
				error: payload.error
			};
		default:
			return state
	}

}
