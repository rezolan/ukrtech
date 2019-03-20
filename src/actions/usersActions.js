import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../constants/actionTypes';

export const fetchUsers = () => dispatch => {
	dispatch({type: FETCH_USERS_REQUEST});
	fetch('http://localhost:4000/fetch-users')
		.then(res => {
			return res.json();
		})
		.then(payload => {
			dispatch({type: FETCH_USERS_SUCCESS, payload});
		})
		.catch(error => {
			dispatch({type: FETCH_USERS_ERROR, payload: error});
		})
};