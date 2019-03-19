import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../constants/actionTypes';


const InitialState = {
	usersList: [],
	isLoading: true,
	error: null
};

export const users = (state = InitialState, { type, payload }) => {
	switch(type) {
		case FETCH_USERS_REQUEST:
			return {...state, isLoading: true};
		case FETCH_USERS_SUCCESS:
			return {...state, usersList: [...payload], isLoading: false};
		case FETCH_USERS_ERROR:
			return {...state, error: payload, isLoading: false};
		default:
			return {...state};
	}
};